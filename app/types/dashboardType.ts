type ComboBoxInfo = {
  personal: {
    name: string;
  };
  teams: {
    name: string;
    members: {
      name: string;
      role: string;
    }[];
  }[];
};

export type { ComboBoxInfo };
