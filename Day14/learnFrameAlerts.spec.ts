import test from "@playwright/test";

test("Test to learn frame", async ({ page }) => {

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    page.on("dialog", async (dialogAlert) => {

        dialogAlert.accept();
        console.log("Alert is handled and Accepted")
        page.setDefaultTimeout(3000);

 });
        const handleFrame1 = page.frameLocator("//iframe[@id='iframeResult']");
        await handleFrame1.locator("//h2[text()='JavaScript Confirm Box']//following-sibling::button").click();
        page.setDefaultTimeout(3000);
        console.log("The button inside the frame is clicked");
       
  

});