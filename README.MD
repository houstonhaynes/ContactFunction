# Azure Serverless Contact Form (SendGrid v3 API)

> A simple serverless application that sends an email to a single user by way of an Azure Function connecting to SendGrid v3 API.

One of the reasons I created a separate repo based on [Mike Pfeiffer's original source](https://github.com/mikepfeiffer/azure-serverless-contact) was the changes both in the SendGrid API and some underpinnings in Azure Functions for loading the necessary extensions.

## Deployment Steps

1. Create an Azure Function App using the steps outlined in [this guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function).
2. Create an Azure Storage account and enable [static website hosting](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website). 
3. [Create a SendGrid Account](https://docs.microsoft.com/en-us/azure/sendgrid-dotnet-how-to-send-email#create-a-sendgrid-account) in the Azure Portal and create a SendGrid API key in the SendGrid console.
4. Create an App Setting entry in your Function App called **SENDGRID_API_KEY** that contains your SendGrid API key.
5. Deploy the **Contact** function in this repo to your Function App. You can do this easily with Visual Studio (VS) Code using the steps outlined in [Deploy to Azure using Azure Functions](https://code.visualstudio.com/tutorials/functions-extension/getting-started). Make sure you **update line 17** in the function.json file to include your desired destination email address before you deploy.
6. The webdocs HTML and JS files are heavily commented for reference. If you look at my portfolio site repo you'll see that the HTML is dropped in-line into the contact.md file and the JS is included in the template path and added to the config.toml . You must first **update line 12** in the contact.js file with your function URL before you upload.
7. The CSS animation uses the [loading.css library](https://github.com/loadingio/loading.css). 
8. I'm in the process of implementing Skeleton CSS and found [Skeleton-alerts](https://github.com/nathancahill/skeleton-alerts) in the process. That's how the confirmation is marked up.
8. The SVG comes from the [Microsoft Icon library](https://www.microsoft.com/en-us/download/details.aspx?id=41937). 

## App Info
![alt text](/webdocs/ContactAzureFunction.gif "README Image")

### Author
Houston Haynes
[@HoustonHaynes](https://twitter.com/whiskersedge)

and borrows very heavily from the work of 
Mike Pfeiffer
[@mike_pfeiffer](https://twitter.com/mike_pfeiffer)

### Version

1.0.0

### License

This project is licensed under the Apache License 2.0

