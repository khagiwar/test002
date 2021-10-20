const TargetClient = require("@adobe/target-nodejs-sdk");

const CONFIG = {
    client: "adobeintkojihagiwara",
    organizationId: "240D46D257BF1E6F7F000101@AdobeOrg",
    decisioningMethod: "on-device",
    events: {
        clientReady: targetClientReady
    }
};

const tClient = TargetClient.create(CONFIG);

function targetClientReady() {
    //Adobe Target SDK has now downloaded the JSON artifact locally, which contains the activity details.
    //We will see how to use the artifact here very soon.
}
