import axios from "axios";
import { MutationTypes } from "./mutation-types";
import {
  sendGetOnce,
} from "@/services/api";

const actions = {
  [MutationTypes.GET_ALL_POKEMONS]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendGetOnce("/pokemons", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.GET_POKEMON_BY_ID]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendGetOnce(`/pokemons/${payload.id}`);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.GET_TYPES]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendGetOnce("/types", payload);
    if (response) {
      return response;
    } else {
      return null;
    }
  },
  [MutationTypes.GET_IMAGE_BY_ID]: async (
    { commit }: { commit: any },
    payload: any
  ) => {
    const response = await sendGetOnce(`/pokemons/${payload.id}/sprite`, );
    if (response) {
      return response;
    } else {
      return null;
    }
  },
};

export default actions;
