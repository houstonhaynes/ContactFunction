# Azure Serverless Contact Form (SendGrid v3 API)

> Simple serverless application that sends an email using Azure Functions and SendGrid v3 API.

One of the reasons I created a separate repo based on [Mike Pfeiffer's original source](https://github.com/mikepfeiffer/azure-serverless-contact) was the changes both in the SendGrid API and some underpinnings in Azure Functions for loading the necessary extensions.

I also removed the HTML page but may re-add my own (which is embedded in an R/markdown document using a Hugo shortcode) with tweaks to the ignore so that it can reside within the Azure Function project without janking anything.

## Deployment Steps

1. Create an Azure Function App using the steps outlined in [this guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-create-first-azure-function).
2. Create an Azure Storage account and enable [static website hosting](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website). 
3. [Create a SendGrid Account](https://docs.microsoft.com/en-us/azure/sendgrid-dotnet-how-to-send-email#create-a-sendgrid-account) in the Azure Portal and create a SendGrid API key in the SendGrid console.
4. Create an App Setting entry in your Function App called **SENDGRID_API_KEY** that contains your SendGrid API key.
5. Deploy the **ContactFunction** in this repo to your Function App. You can do this easily with Visual Studio (VS) Code using the steps outlined in [Deploy to Azure using Azure Functions](https://code.visualstudio.com/tutorials/functions-extension/getting-started). Make sure you **update line 23** in the function.json file to include your desired destination email address before you deploy.
6. Upload the **index.html** file from the **www** folder of this repo into the **$www** container in your static website enabled storage account. You must first **update line 67** in the index.html file with your function URL before you upload.

## App Info

### Author
Houston Haynes
[@HoustonHaynes](https://twitter.com/whiskersedge)

but inspired by the work of 
Mike Pfeiffer
[@mike_pfeiffer](https://twitter.com/mike_pfeiffer)

### Version

1.0.0

### License

This project is licensed under the Apache License 2.0

