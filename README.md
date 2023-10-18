# TRASHLY

## Project Summary

### Issue we are hoping to solve
The issue we are hoping to solve is based on the problem statement, **Tracking, reducing and reusing of Plastic Waste**. India, being one of the largest plastic producers in the world, has been a facing a prolonged issue of plastic pollution and hence, there is no proper established system of collection available for the everyday domestic plastic wastes generated at public households.

### How our technology solution can help

Our platform **Trashly** would help to ignite healthy recycling habits within the common people by letting them exchange everyday plastic wastes for digital incentives.

## Our Idea
In the current waste management system of the country, people face many issues which leave them with absolutely no motivation to recycle plastics on their own. Some of these problems are identified as:

1. Lack of a proper plastic - waste recycling platform.
2. Lack of regular availability of Rag – pickers or vendors to collect plastic wastes.
3. Even if they are available, there is always a problem in negotiation of prices.
4. Lack of enthusiasm in people to recycle each and every plastic item at their home.
5. Lack of stable employment of Rag – pickers or vendors collecting plastics.

We're looking for a solution by creating an android and web-based application that will serve as a platform for consumers to get rid of accumulated plastic and other recyclable waste at home while also benefiting technologically. The Prototype will function as follows:

 - Whenever a user has accumulated a considerable amount of plastic wastes, they can easily take a snapshot and upload it to our platform.
 - Identifying the bio-degradable plastic wastes and their quantity through image screening using Artificial Intelligence (AI).
 - Users generate revenue in the form of cashback points by exchanging these bio-degradable plastic wastes, based on the quantity of the wastes.
 - The nearest trader to the customer's location is assigned to collect the wastes through path optimization.
 - Cashback points can be redeemed in various forms such as discounts, deals, coupons, and prizes that can be utilised in other third-party apps.
 - People can also purchase recycled products and other DIY items manufactured from reusable plastics both from our website and app at cheaper prices.

## Technology Implementation

### IBM AI Services used


[Watson Machine Learning](https://cloud.ibm.com/catalog/services/watson-machine-learningcatalog_query=aHR0cHM6Ly9jbG91ZC5pYm0uY29tL2NhdGFsb2c%2FY2F0ZWdvcnk9YWkjc2VydmljZXM%3D) – This IBM service is used for creating an AI image recognition model, which would be able to identify the quantity of the corresponding plastic waste present in the picture uploaded by the user. This derived quantity would help us to calculate an estimate amount of cashback points to be generated in the user’s account.  

[Watson Assistant](https://cloud.ibm.com/catalog/services/watson-assistant) – This IBM Service is meant to help us while creating an AI – powered chatbot for consumers who get stuck at any process or step while recycling or if they have any doubts regarding their exchange or purchase of other recycled products. This is still considered as a future perspective for our prototype.

## Solution Architecture
![Trashly Solution Architecture](https://github.com/Call-for-Code-Global-Challenge-2023/trashly/assets/74723804/8ec59e4a-9240-4e91-b505-c3df68fd0037)



    ⮚ Simply take a snapshot and send it to our platform if you have a certain amount of plastic waste at home. 
 
    ⮚ We can use AI and ML to assess the quality and quantity of plastic waste and generate cashback points based on that
    information.  
  
    ⮚ Through an **automation system** the model tracks the user’s location, and the nearest trader will be allocated
    to pick up the wastes.  
 
    ⮚ After selling the plastic garbage to the trader, the users get cashback points for redeeming attractive offers
    and prizes on third-party apps.  
 
    ⮚ One can also purchase **recycled plastic items** from the same platform.


## Presentation Materials

### Solution Demo Video


### Project Development Roadmap

The Prototype currently does the following functions:
    ⮚ User can login through authentication.
 
    ⮚ User can upload the picture of the wastes that they want to exchange.
 
    ⮚ User can buy recycled items from the SHOP section.
 
    ⮚ User can easily redeem cashback coupons and offers using their cashback points.
 
In the Future we plan to, 

    ⮚ Inculcate the AI model in the backend of the website so that it can easily work out the algorithm of calculating the quantity
    of plastic wastes available with the user.

    ⮚ We also plan to indulge a 24/7 AI powered chatbot which can help the consumers at any point whenever
    they are stuck with the exchange process or have any doubts regarding their products being recycled or 
    purchasing items on the SHOP section.

![Trashly Roadmap](https://github.com/Call-for-Code-Global-Challenge-2023/trashly/assets/74723804/7eb2fb58-2268-4734-bd78-eab9fd19bda8)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
