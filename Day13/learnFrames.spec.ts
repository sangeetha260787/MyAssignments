import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml");
   
    const outerFrame = page.frameLocator("[src='page.xhtml']");
    const innerFrame= outerFrame.frameLocator("[src='framebutton.xhtml']");
    await innerFrame.getByRole("button",{name:"Click Me"}).click();
    page.setDefaultTimeout(3000);
    console.log("The button inside the frame is clicked");

});