"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_1 = __importDefault(require("@heymarco/element"));
const element_config_1 = __importDefault(require("@heymarco/element-config"));
const control_1 = __importDefault(require("@heymarco/control"));
/**
 * A button control UI.
 */
class Button extends control_1.default {
    constructor(selector = Button.config.class) {
        super(selector);
    }
    static onHoverHandler(event) {
        new Button(event.target).markLeave = false;
    }
    static onLeaveHandler(event) {
        new Button(event.target).markLeave = true;
    }
    static onFocusHandler(event) {
        new Button(event.target).markBlur = false;
    }
    static onBlurHandler(event) {
        new Button(event.target).markBlur = true;
    }
    static onMouseDownHandler(event) {
        new Button(event.target).markPassive = false;
    }
    static onMouseUpHandler(event) {
        new Button(event.target).markPassive = true;
    }
    static onAnimEndHandler(event) {
        new Button(event.target).clearAnimMarkOuts();
    }
}
exports.default = Button;
Button._onHoverHandler = (event) => Button.onHoverHandler(event);
Button._onLeaveHandler = (event) => Button.onLeaveHandler(event);
Button._onFocusHandler = (event) => Button.onFocusHandler(event);
Button._onBlurHandler = (event) => Button.onBlurHandler(event);
Button._onMouseDownHandler = (event) => Button.onMouseDownHandler(event);
Button._onMouseUpHandler = (event) => Button.onMouseUpHandler(event);
Button._onAnimEndHandler = (event) => Button.onAnimEndHandler(event);
Button.config = new element_config_1.default(
/* className    = */ "button, .btn", 
/* varPrefix    = */ "btn", 
/* deconfigure  = */ () => {
    element_1.default.document
        // un-watch the hover event of all buttons in whole document.
        .off("mouseenter", Button.config.class, Button._onHoverHandler)
        // un-watch the leave event of all buttons in whole document.
        .off("mouseleave", Button.config.class, Button._onLeaveHandler)
        // un-watch the focus event of all buttons in whole document.
        .off("focus", Button.config.class, Button._onFocusHandler)
        // un-watch the blur event of all buttons in whole document.
        .off("blur", Button.config.class, Button._onBlurHandler)
        // un-watch the mouse pressed event of all buttons in whole document.
        .off("mousedown", Button.config.class, Button._onMouseDownHandler)
        // un-watch the mouse released event of all buttons in whole document.
        .off("mouseup", Button.config.class, Button._onMouseUpHandler)
        // un-watch the animation ended event of all buttons in whole document.
        .off("animationend", Button.config.class, Button._onAnimEndHandler);
}, 
/* configure    = */ () => {
    element_1.default.document
        // watch the hover event of all buttons in whole document.
        .on("mouseenter", Button.config.class, Button._onHoverHandler)
        // watch the leave event of all buttons in whole document.
        .on("mouseleave", Button.config.class, Button._onLeaveHandler)
        // watch the focus event of all buttons in whole document.
        .on("focus", Button.config.class, Button._onFocusHandler)
        // watch the blur event of all buttons in whole document.
        .on("blur", Button.config.class, Button._onBlurHandler)
        // watch the mouse pressed event of all buttons in whole document.
        .on("mousedown", Button.config.class, Button._onMouseDownHandler)
        // watch the mouse released event of all buttons in whole document.
        .on("mouseup", Button.config.class, Button._onMouseUpHandler)
        // watch the animation ended event of all buttons in whole document.
        .on("animationend", Button.config.class, Button._onAnimEndHandler);
}, 
/* configFirst  = */ true // it's safe to apply the config immediately.
);
