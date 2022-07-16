import { useState, createContext, useContext, ReactNode } from "react";

interface formDataState {
  firstName: string;
  lastName: string;
  eMail: string | number;
  formData: {};
  setFormData?: () => {};
  getFormData: () => void;
} ;

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
  } );

  function getFormData(e) {
    const data = e.target.value;
    setFormData((i) => {
      return { ...i, ["name"]: data };
    });
  }

  return (
    <FormDataContext.Provider
      value={{ formData, setFormData, getFormData } }
    >
      {children}
    </FormDataContext.Provider>
  );
}
