import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 100,
  duration: "20s",
};

export default function () {
  http.get("http://localhost:3000/")
  sleep(1);
};
