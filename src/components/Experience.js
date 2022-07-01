const Experience = () => {
    return (
        <div className="experience">
            <h2>Experience</h2>

            <ul>
                <li>
                    <i>Superior University</i>, 2017-2023
                    <ul>
                        <li>Graduated with 3.00 GPA</li>
                    </ul>
                </li>
                <li>
                    <i>Soft Circle</i> - <strong>Blockchain Developer Intern</strong>, 2022-2023
                    <ul>
                        <li>NFT Marketplace Development</li>
                        <li>Assisted Research &amp; Development on Web3 Products</li>
                    </ul>
                </li>
                {/* <li>
                    <i>SpiderChain</i> - <strong>Blockchain Developer</strong>, 2019-2022
                    <ul>
                        <li>Contributed to smart contract development on client's platform</li>
                        <li>Peer reviewed &amp; Audited Solidity code</li>
                    </ul>
                </li> */}
            </ul>
        </div>
    );
}

export default Experience;