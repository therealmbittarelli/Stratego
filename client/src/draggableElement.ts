export class DraggableElement {
  private elementId: string;
  private element: HTMLElement;

  private mouseOffsetX: number = 0;
  private mouseOffsetY: number = 0;
  private mouseStartX: number = 0;
  private mouseStartY: number = 0;

  constructor(elementId: string) {
    this.elementId = elementId;
    this.element = document.getElementById(this.elementId);
  }

  public startListening(): void {
    this.element.onmousedown = this.dragMouseDown.bind(this);
  }

  private dragMouseDown(e: MouseEvent): void {
    e.preventDefault();
    this.mouseStartX = e.clientX;
    this.mouseStartY = e.clientY;
    document.onmouseup = this.closeDragElement.bind(this);
    document.onmousemove = this.elementDrag.bind(this);
  }

  private elementDrag(e: MouseEvent): void {
    console.log(`dragging: ${this.elementId} top: ${this.element.style.top} left: ${this.element.style.left}`);
    e.preventDefault();
    this.mouseOffsetX = this.mouseStartX - e.clientX;
    this.mouseOffsetY = this.mouseStartY - e.clientY;
    this.mouseStartX = e.clientX;
    this.mouseStartY = e.clientY;
    this.element.style.top = (this.element.offsetTop - this.mouseOffsetY) + 'px';
    this.element.style.left = (this.element.offsetLeft - this.mouseOffsetX) + 'px';
  }

  private closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
