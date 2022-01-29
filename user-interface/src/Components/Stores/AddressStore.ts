import { IStreet } from "../InterfaceRepository/IStreet";
import { makeAutoObservable, runInAction } from "mobx";
import { v4 } from "uuid";
import agent from "../../Agent/Agent";
import { ErrorToast, SuccessToast } from "./Toasts";

export default class AddressStore {
  addressRegistry = new Map<string, IStreet>();
  selectedaddress: IStreet | undefined = undefined;
  modalState = "LIST";

  constructor() {
    makeAutoObservable(this);
    this.fetchaddresss();
  }

  fetchaddresss = async () => {
    this.addressRegistry = await agent.Addresses.list().then(
      (res) => new Map(res.map((i) => [i.streetId, i]))
    );
  };

  getAddresses = () => {
    return Array.from(this.addressRegistry.values());
  };

  openModal = (state: string, addressId?: string) => {
    addressId ? this.selectaddress(addressId) : this.deselectaddress();
    this.modalState = state;
  };

  closeModal = () => {
    this.modalState = "LIST";
  };

  selectaddress = (id: string) => {
    this.selectedaddress = this.addressRegistry.get(id);
  };

  deselectaddress = () => {
    this.selectedaddress = {} as IStreet;
  };

  createaddress = async (address: IStreet) => {
    address.streetId = v4();
    try {
      await agent.Addresses.add(address);
      runInAction(() => {
        this.addressRegistry.set(address.streetId, address);
        this.selectedaddress = address;
        this.modalState = "LIST";
      });
    } catch (error) {
      console.log(error);
      ErrorToast();
    }
  };

  deleteaddress = async (addressId: string) => {
    try {
      await agent.Addresses.delete(addressId);
      runInAction(() => {
        this.addressRegistry.delete(addressId);
        this.selectedaddress
          ? this.selectedaddress.streetId === addressId
            ? this.deselectaddress()
            : console.log("")
          : SuccessToast();
      });
    } catch (error) {
      ErrorToast();
    }
  };

  updateaddress = (address: IStreet) => {
    try {
      this.addressRegistry.set(address.streetId, address);
      this.selectedaddress = address;
      this.modalState = "LIST";
    } catch (error) {
      ErrorToast();
    }
  };

  getDefaultaddress = (): IStreet => {
    return {
      streetId: "",
      streetName: "",
      city: "",
    };
  };
}
