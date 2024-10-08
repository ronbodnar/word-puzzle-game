import { showMessage } from "../../shared/services/message.service.js"
import { APP_NAME } from "../../shared/utils/constants.js"
import { createNavigationButton } from "./navigation-button.js"
import { createText } from "../../shared/components/text.js"

/**
 * Clears the content container and builds a standard view with specified additional elements and options.
 *
 * @param {string} name - The name to be assigned to the view container.
 * @param {Object} [optionList={}] - Additional options to be passed to the view.
 * @param {string} [optionList.title] - The title for the view.
 * @param {boolean} [optionList.hasNavigationButton=true] - Whether to include a navigation button.
 * @param {Object} [optionList.header={}] - The header details.
 * @param {Object} [optionList.subheader={}] - The subheader details.
 * @param {Object} [optionList.message={}] - The message details.
 * @param {Object} [optionList.submessage={}] - The submessage details.
 * @param {Array} [optionList.additionalElements=[]] - Additional elements to include in the view.
 */
export const buildView = (name, options = {}) => {
  if (!name) {
    throw new Error("No name provided to buildView")
  }

  const {
    hasNavigationButton = true,
    header,
    subheader,
    message,
    submessage,
    additionalElements,
  } = options

  const titlePrefix = header?.text
    ? header.text === APP_NAME
      ? ""
      : header.text + " | "
    : ""
  window.document.title = titlePrefix + APP_NAME

  const contentContainer = document.querySelector(".content")
  contentContainer.id = name
  contentContainer.innerHTML = ""

  if (hasNavigationButton) {
    const navigationButton = createNavigationButton(name)
    contentContainer.appendChild(navigationButton)
  }

  // Iterate over optional header, subheader, and message elements.
  // For each defined element, create a corresponding text element and append it to the content container.
  // The 'type' is determined based on the element's position in the array.
  ;[header, subheader, message].forEach((element, index) => {
    if (element) {
      contentContainer.appendChild(
        createText({
          type: ["view-header", "subheader", "message"][index],
          text: element.text || "",
          hidden: element.hidden || false,
          emitClickEvent: element.emitClickEvent || false,
          classes: element.classes || [],
          styles: element.styles || {},
        })
      )
    }
  })

  if (additionalElements) {
    if (!Array.isArray(additionalElements)) {
      throw new Error("Additional elements must be an array")
    }
    additionalElements.forEach((element) =>
      contentContainer.appendChild(element)
    )
  }

  if (submessage) {
    const submessageElement = createText({
      type: "submessage",
      text: submessage.text,
      hidden: submessage.hidden || false,
      emitClickEvent: submessage.emitClickEvent || false,
      classes: submessage.classes || [],
      styles: submessage.styles || {},
    })
    contentContainer.appendChild(submessageElement)
  }

  if (message && message.text) {
    const options = {
      hide: message.hide === true,
      hideDelay: message.hideDelay || 5000,
      className: message.className,
    }
    showMessage(message.text, options)
  }
}
