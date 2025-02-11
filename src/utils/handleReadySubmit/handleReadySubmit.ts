import { type useFormik, type FormikValues } from "formik";

type Formik<T extends FormikValues> = ReturnType<typeof useFormik<T>>;

export const handleReadySubmit =
  <T extends FormikValues>(formik: Formik<T>, formIndex?: number) =>
  async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    formik.handleSubmit();
    const isValid = await formik.validateForm();

    if (Object.keys(isValid).length > 0) {
      requestAnimationFrame(() => {
        // Use a second requestAnimationFrame to ensure the scroll happens after the DOM updates
        requestAnimationFrame(() => {
          const firstErrorField = Object.keys(isValid)[0];
          const errorElement =
            document.getElementsByName(firstErrorField)[formIndex ?? 0];

          if (errorElement !== undefined) {
            errorElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        });
      });
    }
  };
