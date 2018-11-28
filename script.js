import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 700,
  duration: "20s",
};

export default function () {
  http.get("http://localhost:3000/:307088-195/colors");
};