import { FormDataProvider } from "./FormDataContext";

describe("Form Data Provider", () => {
  it("returns a first name", () => {
    //something
    
    //act

    //assert
  });
});

//   const FormDataContext = createContext({} as formDataState);

//   export function useFormDataContext() {
//     return useContext(FormDataContext);
//   }

//   export function FormDataProvider({ children }: childType) {
//     const [formData, setFormData] = useState({
//       firstName: "",
//       lastName: "",
//       eMail: "",
//       phoneNumber: undefined,
//     });

//     function getFormData(e: SyntheticEvent<HTMLInputElement>): void {
//       const { name, value } = e.currentTarget;
//       return setFormData((i) => {
//         return { ...i, [name]: value };
//       });
//     }
