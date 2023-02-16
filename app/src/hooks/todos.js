import { useQuery } from "react-query";
import { api } from "../core/api";

export function useTodos() {
  const path = "/todos";
  const fetch = async () => await api.get(path).then((res) => res.data);
  const data = useQuery(path, fetch);
  return data;
}
