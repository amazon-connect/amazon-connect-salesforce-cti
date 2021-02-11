# Amazon Connect CTI Adapter v5

<h3 align="center"> Setup and Installation Guide</h3>

<p align="center">
  <img src="./lightning/media/image1.png" />
</p>

<h3 align="center"> September, 2020</h3>

_© Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. SPDX-License-Identifier: CC-BY-SA-4.0_

#### Notices

This document is provided for informational purposes only. It represents
AWS's current product offerings and practices as of the date of issue of
this document, which are subject to change without notice. Customers are
responsible for making their own independent assessment of the
information in this document and any use of AWS's products or services,
each of which is provided "as is" without warranty of any kind, whether
express or implied. This document does not create any warranties,
representations, contractual commitments, conditions or assurances from
AWS, its affiliates, suppliers or licensors. The responsibilities and
liabilities of AWS to its customers are controlled by AWS agreements,
and this document is not part of, nor does it modify, any agreement
between AWS and its customers.

#### Abstract

This guide details the integration between Amazon Connect and Salesforce
Lightning. It covers the installation, configuration, and operation of
the two primary components of the integration: the Amazon Connect CTI
Adapter for Salesforce and the AWS Serverless Application Repository for
Amazon Connect Salesforce integration.

## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the LICENSE file.

The sample code within this documentation is made available under the MIT-0 license. See the LICENSE-SAMPLECODE file.

## Contributing

Important rules to keep in mind while contributing to preserve compatibility with our [pdf generator](util/generatePDF.js) and [toc generator](util/generateTOC.js):

- All folders (to be included in the generated pdf) must lead with numbers-- ex. 01 [title]
- The pdf generator, when crawling through a folder, will parse first through the readme file,
  then through the markdown files in the folder ordered lexicographically, then through the subfolders
  ordered lexicographically
- When linking internally, make sure that the header of the section the link points to has an
  id that matches the text of the link, lowercase, and with dashes (-) in place for spaces.
  ex. \[Key Benefits and Requirements\]\(...\) will navigate to a link with id 'key-benefits-and-requirements'
- To make sure a header is added to the table of contents, add the class "toc" to the header.
  ex \<h1 class="toc"\> Key Benefits and Requirements \<\/h1\>
- Entries in the table of contents are indented based on header level (h1 - 0 indent, h2 - 1 indent, etc)
