import { Config } from "../config";

const main = async () => {
    for (const site of Config.subSites) {
        console.log(`Processing: ${site.props.name}`);
        await site.props.build();
        console.log(`Processed: ${site.props.name}`);
    }
};

main();
