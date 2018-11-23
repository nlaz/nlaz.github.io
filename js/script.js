let material;

const getCursorXY = e => {
  if (window.Event) {
    const cursorX = window.innerWidth / 2 - e.pageX;
    const cursorY = window.innerHeight / 2 - e.pageY;
    const angle = Math.atan2(cursorX, cursorY) * 180 / Math.PI;
    const rotation = angle > 0 ? angle : 360 - Math.abs(angle);

    material.uniforms.uRotation.value = rotation;
  }
};

const setupTitle = () => {
  const text = new Blotter.Text("Niko Lazaris", {
    family: "'EB Garamond', serif",
    size: 64,
    fill: "#202020",
    paddingLeft: 40,
    paddingRight: 40,
  });

  material = new Blotter.ChannelSplitMaterial();

  material.uniforms.uRotation.value = 0.0;
  material.uniforms.uApplyBlur.value = 0.0;

  const blotter = new Blotter(material, {
    texts: text,
  });

  const elem = document.getElementById("title");
  const scope = blotter.forText(text);

  scope.appendTo(elem);
};

document.addEventListener("DOMContentLoaded", e => {
  setupTitle();

  if (window.Event) {
    document.captureEvents(Event.MOUSEMOVE);
    document.onmousemove = getCursorXY;
  }
});
