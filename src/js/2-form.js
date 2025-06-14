const LOCAL_STORAGE_KEY = "feedback-form-state";

let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");

const loadFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
      formData = JSON.parse(savedState);
      form.elements.email.value = formData.email.trim();
      form.elements.message.value = formData.message.trim();
    }
  } catch (error) {
    console.error("Помилка при завантаженні з локального сховища:", error);
  }
};

const saveToLocalStorage = () => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

const handleInput = (event) => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
};

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);