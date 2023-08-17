import { atom } from "recoil";
import { SignupStateDto } from "../interface/signup";

export const signupState = atom<SignupStateDto>({
  key: "signupState",
  default: {
    name: "",
    phone: "",
    address: "",
    detailAddress: "",
    role: "",
    certificate: "",
  },
});

export const formData = atom({
  key: "formData",
  default: new FormData(),
});
