---
templateKey: blog-post
title: 'Coin overview: IOTA'
date: 2020-02-11T12:36:45.024Z
description: >-
  IOTA is a distributed ledger designed to record and execute transactions
  between machines and devices in the Internet of Things (IoT) ecosystem. The
  ledger uses a cryptocurrency called mIOTA to account for transactions in its
  network. IOTA’s key innovation is Tangle, a system of nodes used for
  confirming transactions. IOTA claims that Tangle is faster and more efficient
  than typical blockchains used in cryptocurrencies. The IOTA foundation, the
  non-profit foundation responsible for the ledger, has inked agreements with
  prominent companies, such as Bosch and Volkswagen, to extend the platform’s
  utility among connected devices.
featuredpost: true
featuredimage: /img/iota.png
tags:
  - crypto
---
## Understanding IOTA 

According to research firm Gartner, there will be 20.4 billion devices connected to the Internet by 2020. Within this [Internet of Things (IoT)](https://www.investopedia.com/terms/i/internet-things.asp) ecosystem, each device will exchange data and payment information with multiple, other devices in transactions conducted throughout the day.

IOTA intends to become the standard mode of conducting transactions on devices. Its founders have described the ledger as a “public permission-less backbone for the Internet of Things that enables interoperability between multiple devices.” In simple words, this means that it will enable transactions between connected devices, and anyone will be able to access it.

IOTA’s founders claim that it solves multiple problems plaguing cryptocurrencies that are developed on standard blockchains. These problems range from the centralization of [mining](https://www.investopedia.com/terms/b/bitcoin-mining.asp) to a specific group to low network speeds to scalability or the problem of increasing the number of transactions processed by a blockchain without affecting other metrics.

Those problems are primarily caused due to a backlog of transactions on Bitcoin’s blockchain. The backlog itself is because of a variety of reasons, from small block sizes to the difficulty of puzzles that miners must solve to earn the cryptocurrency as a reward. IOTA solves these problems by reconfiguring blockchain's architecture into Tangle, a new way of organizing data and confirming transactions.


##  History of IOTA 

Sergey Ivancheglo, Serguei Popov, David Sønstebø, and Dominik Schiener, who joined later, together co-founded IOTA.

The blockchain was announced in October 2015 through [a post announcing a token sale in an online bitcoin forum](https://bitcointalk.org/index.php?topic=1216479.0). The roots of IOTA go back to the Jinn project. That project aimed to develop ternary hardware or low-cost and energy-efficient hardware, primarily general-purpose processors, for use in the IoT ecosystem. Jinn held a crowd sale for its tokens in September 2014. Approximately 100,000 tokens were sold during the crowd sale, amounting to collections of $250,000.

The Jinn tokens were soon in hot water because they marketed as profit-sharing tokens. (Initial coin offerings were gaining traction at that time, and there was no clarity about their regulatory status). In 2015, Jinn was rebranded as IOTA, and another token sale was held. This time around, the tokens were marketed as utility tokens, and Jinn token holders could exchange their tokens at equivalency with the new blockchain. According to David Sønstebø, IOTA was “spawned” due to the Jinn project. “..so it only makes sense first to introduce IOTA and then Jinn afterwards,” he said.

The genesis transaction for IOTA was an address with a balance that contained all mIOTA, its cryptocurrency, that will ever be mined. But reports state that a snapshot of the genesis transaction is yet to be found online. These tokens were dispersed to other “founder” addresses. The total number of mIOTAs planned to be in existence is 27 quadrillion. According to IOTA’s founders, the total number of mIOTAs fits in “nicely” with the maximum allowable integer value in Javascript, a programming language. Within three months of its debut on cryptocurrency markets, mIOTA reached a peak valuation of $14.5 billion on the back of mania about bitcoin’s prospects. But its value has since crashed with the subsequent swoon in cryptocurrency markets. 


##  Key Takeaways 

* _IOTA is a blockchain developed to handle transactions between connected devices in the IoT ecosystem. Its cryptocurrency is known as mIOTA._ 
* _It began life as a hardware project whose goal was to design low-cost general-purpose processors._ 
* _It aims to solve key scalability and performance issues with Bitcoin by replacing its blockchain with Tangle, a system of nodes in which each new transaction confirms two previous transactions._
* _IOTA has its own set of scaling problems and its Curl hash function, which is used for security, is vulnerable, to hacks._ 


##  How Does IOTA Solve Bitcoin’s Scalability Problems?  

IOTA’s solution to Bitcoin’s problems is to do away with several key concepts and topographical constraints of a blockchain. mIOTA, IOTA’s cryptocurrency, is pre-mined and consensus of transactions occurs differently as compared to a blockchain. IOTA developers have proposed a new data structure (a way to organize numeric representations within a computer’s memory) known as Tangle.

Tangle is a Decentralized Acyclic Graph (DAG), a system of nodes which is not sequential. Thus, each node can be connected to multiple other nodes in a Tangle. But they are connected only in a particular direction, meaning that a node cannot refer back to itself. A standard blockchain is also a DAG because it is a sequential linked set. But IOTA’s Tangle is a parallel system, in which transactions can be processed simultaneously, instead of sequentially. As more systems are attached to it, the Tangle becomes more secure and efficient at processing transactions.

In Bitcoin, a group of systems running full nodes that contain the entire history of transactions for a ledger are required for confirmations and consensus. This process is energy- and computation-intensive.

Full node miners are not required in Tangle. Each new transaction is confirmed by referencing two previous transactions, reducing the amount of time and memory required to confirm a transaction. An easily-solvable and straightforward Proof of Work (PoW) puzzle is added to the transaction as a final step. The two transactions that are chosen are referred to as tips. IOTA’s system uses a tip selection algorithm with “confidence” as a measure to approve the transaction. If a transaction has been approved 97 times in the past, then there is 97% confidence that a node will approve it in the future.

Related to the concept of a “confidence” is a transaction’s weight. As it moves through Tangle, a transaction gathers weight. A transaction’s weight increases with the number of approvals. Once a transaction is confirmed, it is broadcast to the entire network, and another unconfirmed transaction can choose the newly-confirmed transaction as one of the tips to confirm itself.   

This method of confirming a transaction results in no fees and low power consumption, enabling mIOTA to be used across a wide variety of devices and machines with different power requirements.  


##  Governance Protocol 

IOTA has not outlined a governance structure for its blockchain. The IOTA Foundation is primarily responsible for funding and leading development of IOTA. In a previous post, John Licciardello, former managing director of IOTA's Ecosystem Development Fund (EDF), [stated that EDF was planning to build a program](https://blog.iota.org/announcing-the-iota-ecosystem-339612656bc3) that would allow members of the IOTA community to vote on proposals regarding its future direction. But there are no updates on the initiative yet.


##  Concerns About IOTA 

Criticism of IOTA has mainly centered around its technical flaws. As with most cryptocurrencies, IOTA’s system is nascent and unproven. A phishing attack on its network resulted in the theft of mIOTA worth $3.94 million. In response to the attack, the IOTA development team wrote a blog post outlining steps to generate a strong seed for using its cryptocurrency.

IOTA’s developers are supposed to have “rolled” their crypto. In other words, they created their encryption scheme from scratch, forgoing the widely-used SHA-256 hash function used in Bitcoin. The team at MIT’s Digital Currency Initiative found serious vulnerabilities with IOTA’s hash function, which is called Curl. The function produced the same output when it was given two different inputs. This property is known as Collision and denotes a broken hash function. In their analysis of the vulnerability, the MIT team stated that a bad actor could have destroyed or stolen user funds from Tangle with their technique. IOTA’s team has corrected the vulnerability.

Given that mIOTA, the cryptocurrency used in IOTA, is still to gain mainstream traction, its claims to eliminate scalability problems for blockchains through the use of DAGs are also still to be proven. Vitalik Buterin, the co-founder of Ethereum, has cast doubt on the ability of hashgraphs (the underlying data structures for DAG) to solve scalability issues. As he explains it, current versions of hashgraphs do not solve for a blockchain’s dependency on computer memory and processing power. The scalability of a system using hashgraphs still depends on the capacity and speed of individual computers within its network.

Another problem with IOTA currently is the small size of its network. Researchers have found that hackers need only gain control of 33% of the total hashing power required to bring it down. In Bitcoin, control of 51% of a network is required to bring its blockchain down. The relatively lower percentage in IOTA’s case is a function of the current size of its network.

To ensure security, IOTA’s network currently uses a central server known as a Coordinator to process transactions. This practice has diluted its claims of being a decentralized system since the introduction of a Coordinator has resulted in the introduction of a single point of failure. It has also slowed down the network’s speed because parallel processing does not occur in a Coordinator-based system.
