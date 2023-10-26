import React,{useEffect,useRef,useState} from 'react';
// Custom hook for form handling
function useForm(initialState) {
    const [form, setForm] = useState(initialState);
  
    const handleChange = (event) => {
      const { name, value, files, checked } = event.target;
      console.log(`Name: ${name} value: ${value}`);
  
      setForm((prevState) => ({
        ...prevState,
        [name]: files ? files[0] : checked ? checked : value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the form data
      console.log(form);
    };
  
    return [form, handleChange, handleSubmit];
  }
  
  // Form component that uses the custom hook
  function Form1() {
    // Initial state object for the form
    const initialState = {
      name: "",
      email: "",
      color: "",
      date: "",
      range: "50",
      option: "",
      file: null,
      selectedOption: "",
    };
  
    // Use the custom hook with the initial state
    const [form, handleChange, handleSubmit] = useForm(initialState);
  
    // Create refs for each input element that needs it
    const nameRef = useRef();
    const companyRef = useRef();
  
    // Focus on the name input on mount
    useEffect(() => {
      nameRef.current.focus();
    }, []);
  
    return (
      <>
        <h3>Advance Form handling in React</h3>
        <form onSubmit={handleSubmit}>
          {/* Attach the refs to the inputs */}
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              ref={nameRef}
            />
          </label>
          <br />
          <br />
          <label>
            Company Name:
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
              ref={companyRef}
            />
          </label>
          <br />
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <br />
          <label>
            Color:{" "}
            <input
              type="color"
              name="color"
              value={form.color}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <br />
          <label>
            Date:{" "}
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <br />
          <label>
            Range:{" "}
            <input
              type="range"
              name="range"
              value={form.range}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <br />
          <label>
            Options:
            <select
              name="option"
              value={form.option}
              onChange={handleChange}
              required
            >
              <option value="">--Please choose an option--</option>
              <option value="Javascript">Javascript</option>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="NodeJs">NodeJs</option>
            </select>
          </label>
          <br />
          <br />
  
          <label>
            File Upload:{" "}
            <input type="file" name="file" onChange={handleChange} required />
          </label>
          <br />
          <br />
          <label>
            <input
              type="radio"
              name="selectedOption"
              value="red"
              checked={form.selectedOption === "red"}
              onChange={handleChange}
            />
            Red
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="selectedOption"
              value="green"
              checked={form.selectedOption === "green"}
              onChange={handleChange}
            />
            Green
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
  
  export default Form1;
  