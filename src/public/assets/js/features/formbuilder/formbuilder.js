import { logger } from "../../main.js"
import { createText } from "../../shared/components/text.js"
import { createInput } from "./input.js"
import { createLabel } from "./label.js"

/**
 * Builds and returns an HTML form element based on the provided input groups, buttons, and options.
 *
 * @param {Array<Object>} inputGroups - An array of input group objects, each containing properties like `text`, `type`, and `message`.
 * @param {Array<HTMLButtonElement>} buttons - An array of button elements to be appended to the form.
 * @param {Object} [optionList={}] - Optional settings for the form.
 * @param {string} [optionList.id] - An optional ID for the form element.
 * @param {string} [optionList.submessage] - An optional submessage to be displayed at the bottom of the form.
 * @returns {HTMLFormElement} The generated form element.
 */
export const buildForm = (inputGroups, buttons, options = {}) => {
  const { id, submessage } = options

  if (!inputGroups || !Array.isArray(inputGroups)) {
    throw new Error("inputGroups must be an Array.")
  }

  const form = document.createElement("form")
  form.classList.add("form")
  form.onsubmit = () => {
    return false
  }

  if (id) {
    form.id = id
  }

  // Generate the label / input field pairs for each field and add them to the form.
  for (let i = 0; i < inputGroups.length; i++) {
    const group = inputGroups[i]
    if (!group) {
      logger.error("Invalid field provided")
      continue
    }

    const label = createLabel(group.text)
    const input = createInput(group.text, {
      type: group.type,
    })

    form.appendChild(label)
    form.appendChild(input)

    // Add a submessage element under the input field and add it to the form.
    if (group.message) {
      const inputMessageDiv = createText({
        type: "submessage",
        text: group.message,
        emitClickEvent: true,
      })
      inputMessageDiv.style.textAlign = "start"
      inputMessageDiv.style.marginTop = "0"
      form.appendChild(inputMessageDiv)
    }
  }

  // Generate the buttons
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.style.marginTop = "25px"
    form.appendChild(button)
  }

  // Create a submessage element, set the text and add the global click handler.
  if (submessage) {
    const submessageDiv = createText({
      type: "submessage",
      text: submessage,
      emitClickEvent: true,
    })
    form.appendChild(submessageDiv)
  }

  return form
}
