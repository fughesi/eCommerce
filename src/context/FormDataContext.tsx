import {
  useState,
  createContext,
  useContext,
  ReactNode,
  ChangeEvent
} from "react";

interface formDataState {
  firstName: string;
  lastName: string;
  eMail: string;
}

type formDataProps = {
  formData: {};
<<<<<<< HEAD
  setFormData?: () => {};
  getFormData: () => void;
} ;
=======
  getFormData: () => {};
  getFormData: () => void;
};
>>>>>>> f3d3e1d65e8e8c23623ed85a7750de4da9bda615

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

<<<<<<< HEAD
  function getFormData(e) {
=======
  function getFormData(e:  ChangeEvent<HTMLInputElement>): void {
>>>>>>> f3d3e1d65e8e8c23623ed85a7750de4da9bda615
    const data = e.target.value;
    setFormData((i) => {
      return { ...i, ["name"]: data };
    });
  }

  return (
<<<<<<< HEAD
    <FormDataContext.Provider
      value={{ formData, setFormData, getFormData } }
    >
=======
    <FormDataContext.Provider value={{ formData, setFormData, getFormData }}>
>>>>>>> f3d3e1d65e8e8c23623ed85a7750de4da9bda615
      {children}
    </FormDataContext.Provider>
  );
}
