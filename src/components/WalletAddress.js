import { useConnectedWallet } from "@terra-money/wallet-provider";

const WalletAddress = () => {
    const connectedWallet = useConnectedWallet();
    const { terraAddress } = { ...connectedWallet };
    return (
        <div>
            {terraAddress && (
                <button className="cta-button user-address-btn">{terraAddress.slice(0, 5) + "..." + terraAddress.slice(-4)}</button>
            )}
        </div>
    );
};

export default WalletAddress;
