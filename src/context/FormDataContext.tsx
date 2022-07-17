import {
  useState,
  createContext,
  useContext,
  ReactNode,
  SyntheticEvent,
} from "react";

type formDataState = {
  formData: formDataValues;
  setFormData?: () => {};
  getFormData: (e: SyntheticEvent<HTMLInputElement>) => void;
};

interface formDataValues {
  firstName: string | undefined;
  lastName: string | undefined;
  phoneNumber: number | undefined
  eMail: string | undefined;
}

type childType = {
  children: ReactNode;
};

const FormDataContext = createContext({} as formDataState);

export function useFormDataContext() {
  return useContext(FormDataContext);
}

export function FormDataProvider({ children }: childType) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    phoneNumber: undefined,
  });

  function getFormData(e: SyntheticEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    return setFormData((i) => {
      return { ...i, [name]: value };
    });
  }
  console.log(formData);

  return (
    <FormDataContext.Provider value={{ formData, getFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}
