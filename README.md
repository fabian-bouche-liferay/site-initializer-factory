# Site initializer factory PoC

Let's find a way to create multiple sites with the same template.

## my-site-initializer-lib

This is the file which contains the assets of the site initializer.

## xxx-site-initializer

We need to create an individual site initializer CX for each site we create.

Liferay does not allow for multiple site initializers to be defined in a client extension.

## Usage with Organization sites

When you create a new organization and enable the organization site, it will be empty.

You have to go to its site configuration to find out about its external reference code.

Include that external reference code in the client-extension.yaml file and deploy the CX
for the site to be initialized with the site template.

## Industrialization

The next step would be to find a way to dynamically create those client extensions
whenever a new site / organization is created.

## Initialization only

The CX deployment only works for the initial site initialization.

I need to check what needs to be done for update to work.
