import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./CreateProject.css"

function CreateProject() {
  // Variables
  const date = new Date()
  const history = useHistory()
  const token = window.localStorage.getItem("token")
  const [project, setProject] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: false,
    date_created: date.toISOString(),
    owner: [],
  })

  const [errorMessages, setErrors] = useState({
    title: "",
    description: "",
    goal: "",
    image: "",
    is_open: "",
    species: "",
  })

  // Methods

  const validAmountRegex = RegExp(/[0-9]{1,}/)

  // Check input to check if it matches requirements and set error state
  const validateInput = () => {
    let errors = { ...errorMessages }

    errors.title = project.title.length < 2 ? "Enter a title" : ""

    errors.description =
      project.description.length < 5 ? "Enter a longer description" : ""

    errors.goal = validAmountRegex.test(project.goal)
      ? ""
      : "Enter an amount valid whole number amount"

    errors.image = project.image.length < 8 ? "Enter a valid image URL" : ""

    errors.date_created =
      project.date_created.length < 1 ? "Enter starting date" : ""

    // errors.species =
    //   project.species.length < 1 ? "Select an animal species" : ""

    return errors
  }

  // Find an if an instance of an error message exists, and return either true or false
  const validateForm = () => {
    const errors = validateInput()
    const firstValidationError = Object.values(errors).find(
      (error) => error.length > 0
    )
    setErrors(errors)
    return firstValidationError === undefined
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setProject((projectDetails) => ({
      ...projectDetails,
      [id]: value,
    }))
  }

  useEffect(() => {
    const match = validAmountRegex.exec(project.goal)
    if (match) project.goal = match[0]
  }, [project.goal, validAmountRegex])

  // This triggers when an animal logo is clicked and adds or removes that animal to the petlike value of state
  // const onAnimalClick = (animal, selected) => {
  //   if (selected) {
  //     setProject((project) => ({
  //       ...project,
  //       species: [...project.species, animal],
  //     }))
  //   }
  //   if (!selected) {
  //     setProject((project) => ({
  //       ...project,
  //       species: project.species.filter((critter) => critter !== animal),
  //     }))
  //   }
  // }

  const onButtonClick = (activeButton) => {
    setProject((project) => ({
      ...project,
      is_open: activeButton,
    }))
  }

  const postData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(project),
    })
    return response.json()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm(errorMessages)) {
      postData().then((response) => {
        console.log(response)
        history.push(`project/${response.id}/`)
      })
    } else {
      console.log("invalid form")
    }
  }

  return (
    <div className="submit-project-form">
      {/* <TitleText title="Create A Project" />
      <ToggleButton
        valueOne="Active"
        valueTwo="Inactive"
        label="Project Status"
        onButtonClick={onButtonClick}
      /> */}
      {/* <TextInput
        id="title"
        type="text"
        label="Project Title"
        placeholder="Give your project an attention grabbing name!"
        onChange={handleChange}
        error={errorMessages.title}
      />
      <TextArea
        id="description"
        type="text"
        label="Project Summary"
        placeholder="Tell us what this project is all about"
        error={errorMessages.description}
        onChange={handleChange}
      /> */}
      {/* <TextInput
        id="goal"
        type="text"
        label="Funding Goal"
        placeholder="$500"
        onChange={handleChange}
        error={errorMessages.goal}
      />
      <TextInput
        id="image"
        type="url"
        label="Image URL"
        placeholder="Enter a URL to your most eye catching photo"
        onChange={handleChange}
        error={errorMessages.image}
      /> */}
      {/* <AnimalCategories
        label="Select Animal Species"
        onAnimalClick={onAnimalClick}
        error={errorMessages.species}
        initState={[]}
      />
      <Button value="Create Project" onClick={handleSubmit} type="submit" /> */}
    </div>
  )
}

export default CreateProject;