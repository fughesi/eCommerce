import {
  useState,
  createContext,
  useContext,
  ReactNode,
  ChangeEvent,
} from "react";

type formDataState = {
  formData: formDataValues;
  setFormData?: () => {};
  getFormData: (e: ChangeEvent<HTMLInputElement>) => void;
};

interface formDataValues {
  firstName: string;
  lastName: string;
  eMail: string;
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
  });

  function getFormData(e: ChangeEvent<HTMLInputElement>): void {
    const data = e.target.value;
    setFormData((i) => {
      return { ...i, ["name"]: data };
    });
  }
  console.log(getFormData);

  return (
    <FormDataContext.Provider value={{ formData, getFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}
