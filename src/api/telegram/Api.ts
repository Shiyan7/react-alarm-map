import { Status } from "../../types/Status";
import { API_URL, GET_PAGES } from "../../utils/consts";

function sendRequest(url: string) {
  return fetch(url);
}

function* getMessagesTexts(response: any): any {

  const div = document.createElement("div");
  div.innerHTML = response;
  const messages: any = div.getElementsByClassName("js-message_text");
  for (const msg of messages) {
    const message = (msg as HTMLElement).innerHTML;

    yield message;
  }
}

export async function getStatuses(): Promise<Record<string, Status>> {

  const list: Record<string, Status> = {};
  const slugs = ["/"];
  
  for (let i = 0; i < slugs.length; ++i) {
    const slug = slugs[i];

    const response = await sendRequest(API_URL + slug);
    
    const responseText = await response.text();

    if (slugs.length < GET_PAGES) {
      const newLink = responseText.match(/\?before=\d+/gm);
      if (newLink && newLink[0]) {
        slugs.push(newLink[0]);
      }
    }
    const messagesFromApi = getMessagesTexts(responseText);
    
    for (const message of [...messagesFromApi].reverse()) {
      const links = [...message.matchAll(/<a.+>(.+)<\/a>/gm)];

      let status = Status.OK;

      if (message.match("F09F9FA1")) {
        status = Status.WARNING;
      } else if (message.match("F09F94B4")) {
        status = Status.ALERT;
      }

      if (
        links &&
        links[0] &&
        links[0][1] &&
        typeof list[links[0][1]] === "undefined"
      ) {
        list[links[0][1]] = status;
      }
    }
  }

  return list;
}