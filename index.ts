import Element from "@heymarco/element";
import ElementConfig from "@heymarco/element-config";
import Control from "@heymarco/control";



/**
 * A button control UI.
 */
export default class Button extends Control {
    constructor(selector : Selector = Button.config.class) {
        super(selector);
    }



    static onHoverHandler(event : MouseEvent) {
        new Button(event.target as HTMLElement).markLeave = false;
    }
    static onLeaveHandler(event : MouseEvent) {
        new Button(event.target as HTMLElement).markLeave = true;
    }

    static onFocusHandler(event : Event) {
        new Button(event.target as HTMLElement).markBlur = false;
    }
    static onBlurHandler(event : Event) {
        new Button(event.target as HTMLElement).markBlur = true;
    }

    static onMouseDownHandler(event : MouseEvent) {
        new Button(event.target as HTMLElement).markPassive = false;
    }
    static onMouseUpHandler(event : MouseEvent) {
        new Button(event.target as HTMLElement).markPassive = true;
    }

    static onAnimEndHandler(event : Event) {
        new Button(event.target as HTMLElement).clearAnimMarkOuts();
    }



    static _onHoverHandler     = (event: JQuery.MouseEnterEvent<HTMLElement, any, any, any>)            => Button.onHoverHandler(event as unknown as MouseEvent);
    static _onLeaveHandler     = (event: JQuery.MouseLeaveEvent<HTMLElement, any, any, any>)            => Button.onLeaveHandler(event as unknown as MouseEvent);
    static _onFocusHandler     = (event: JQuery.FocusEvent<HTMLElement, any, HTMLElement, HTMLElement>) => Button.onFocusHandler(event as unknown as Event);
    static _onBlurHandler      = (event: JQuery.BlurEvent<HTMLElement, any, HTMLElement, HTMLElement>)  => Button.onBlurHandler(event as unknown as Event);
    static _onMouseDownHandler = (event: JQuery.MouseDownEvent<HTMLElement, undefined, any, any>)       => Button.onMouseDownHandler(event as unknown as MouseEvent);
    static _onMouseUpHandler   = (event: JQuery.MouseUpEvent<HTMLElement, undefined, any, any>)         => Button.onMouseUpHandler(event as unknown as MouseEvent);
    static _onAnimEndHandler   = (event: JQuery.TriggeredEvent<HTMLElement, undefined, any, any>)       => Button.onAnimEndHandler(event as unknown as Event);
    static config = new ElementConfig(
        /* className    = */ "button, .btn",
        /* varPrefix    = */ "btn",
        /* deconfigure  = */ () => {
            Element.document


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
            .off("animationend", Button.config.class, Button._onAnimEndHandler)
            ;
        },
        /* configure    = */ () => {
            Element.document


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
            .on("animationend", Button.config.class, Button._onAnimEndHandler)
            ;
        },
        /* configFirst  = */ true // it's safe to apply the config immediately.
    );
}