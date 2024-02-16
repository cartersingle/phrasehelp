export type TPhrase = {
  id: string;
  name: string;
  text: string;
};

export type TSet = {
  id: string;
  name: string;
  phrases: TPhrase[];
};
