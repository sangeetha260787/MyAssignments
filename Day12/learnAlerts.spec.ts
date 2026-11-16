import test from "@playwright/test";

test("Test to learn alert", async ({ page }) => {

    await page.goto("https://leafground.com/alert.xhtml");

    page.on("dialog", async (dialogAlert) => {

    switch(dialogAlert.type())

    {

        case "prompt":
            dialogAlert.accept("Vineeth Rajendran");
            console.log(" Prompt is entered and accepted")
            break;

        case "confirm":
            dialogAlert.dismiss();
            console.log(" Confirm Alert is dismissed")
            break;

        case "alert":
            dialogAlert.dismiss();
            console.log(" Simple Alert is dismissed")
            break;
    
}
    
})


    //simple alert
    await page.locator("//h5[text()=' Alert (Simple Dialog)']/following-sibling::button").click();

    //confirm alert
    await page.locator("//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button").click();

    //prmopt alert
    await page.locator("//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button").click();

     
    
});


