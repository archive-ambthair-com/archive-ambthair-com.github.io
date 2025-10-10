"use strict";
const aws = require('aws-sdk');
const s3 = new aws.S3({region: 'eu-west-1'});
const bucketName = 'www.ambthair.com';

const redirects = {
    "air_conditioning_questions.html": "air_conditioning_key_concepts.html",
    "ambthair.html": "about_ambthair.html",
    "articles.html": "air_conditioning_articles.html",
    "calculate_financial_and_carbon_payback_for_a_single_building.html": "calculate_financial_and_carbon_payback_from_insulating_single_building.html",
    "coolingandlowenergy.html": "free_cooling_and_low_energy_systems.html",
    "dispvmixed.html": "displacement_vs_mixed_flow_ventilation.html",
    "faq.html": "air_conditioning_key_concepts.html",
    "features.html": "air_conditioning_articles.html",
    "how_to_calculate_financial_and_carbon_payback.html": "calculate_financial_and_carbon_payback_from_insulating_multiple_buildings.html",
    "multisplit_and_vrv_systems.html": "multisplit_and_vrv_ventilation.html",
    "multisplit.html": "multisplit_and_vrv_ventilation.html",
    "reduce_energy_costs_and_carbon_emissions,_calculate_payback_costs,_generate_electricity.html": "energy_efficient_heating_and_hot_water_systems.html",
    "studven.html": "air_conditioning_design_for_studios.html",
    "units_for_air_conditioning.html": "air_conditioning_units_of_measurement.html"
};

for (const sourceFile in redirects) {
    console.log(`redirecting ${sourceFile} to ${redirects[sourceFile]}`);
    try {
        makeRedirect(sourceFile, redirects[sourceFile]);
    } catch (err) {
        console.error(`Failled to create redirect for ${sourceFile}`);
        console.error(err.message);
    }
}


async function makeRedirect(source, target) {
    const params = {
        Body: 'redirect object',
        Bucket: bucketName,
        Key: source,
        WebsiteRedirectLocation: `/${target}`,
        ACL: 'public-read'
    };
    // console.log(`Creating redirect for ${source} to ${target}`);
    let result = await s3.putObject(params).promise();
    console.log(result);
    console.log();
}
