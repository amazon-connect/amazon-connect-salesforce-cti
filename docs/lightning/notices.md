---
id: notices
title: Notices
hide_title: true
---

import useBaseUrl from "@docusaurus/useBaseUrl";

<h3 align="center">Setup and Installation Guide</h3>

<p align="center">
  <img src={useBaseUrl('/img/lightning/image1.png')} />
</p>

<h3 align="center">April, 2025</h3>

*© Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. SPDX-License-Identifier: CC-BY-SA-4.0*

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

#### Salesforce Lambda Versions

The Amazon Connect CTI Integration consists of two components - A salesforce package we refer to as the CTI Adapter, and an AWS Serverless application, which contain a set of lambdas to be deployed to your AWS environment. For more information on the lambdas, [visit here](https://github.com/amazon-connect/amazon-connect-salesforce-lambda).

The version of the Lambdas and the version of the CTI Adapter may differ as they are two separate packages. If a specific version of the lambdas package is needed to run with the CTI Adapter and vice versa, it will be stated [here](/docs/lightning/installation/04-salesforce-lambdas-manual-setup#compatibility-table).

## License Summary

The documentation is made available under the Creative Commons Attribution-ShareAlike 4.0 International License. See the [LICENSE file](https://github.com/amazon-connect/amazon-connect-salesforce-cti/blob/main/LICENSE).

The sample code within this documentation is made available under the MIT-0 license. See the [LICENSE-SAMPLECODE file](https://github.com/amazon-connect/amazon-connect-salesforce-cti/blob/main/LICENSE-SAMPLECODE).

<toc/>
