import BeAddTokenModal from "components/organisms/add-token-modal"
import BeConfirmSwapModal from "components/organisms/confirm-swap-modal"
import BeDisclaimerModal from "components/organisms/disclaimer-modal"
import BeSelectTokenModal from "components/organisms/select-token-modal"
import BeSuccessModal from "components/organisms/success-modal"
import BeSwapSettingModal from "components/organisms/swap-setting-modal"
import BeSwapTemplate from "components/template/swap"
import { APP_FEE } from "constants/app"
import { ADD_TOKEN_LIST, SLIPAGE_TOLERANCE_LIST, SWAP_INFO, YOUR_TOKEN_LIST } from "constants/data"
import { useState } from "react"
import { IToken, IYourToken } from "types/token.model"

const BeSwapPage = () => {
    const [showSwapSetting, setShowSwapSetting] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [showSelectToken, setShowSelectToken] = useState(false);
    const [showAddToken, setShowAddToken] = useState(false);
    const [showConfirmSwap, setShowConfirmSwap] = useState(false);
    const [showSwapSuccess, setShowSwapSuccess] = useState(false);
    const [skip, setSkip] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(10);
    const [valueSwap, setValueSwap] = useState(20);
    const [valueReceive, setValueReceive] = useState(200);
    const [fromToken, setFromToken] = useState<IYourToken>(YOUR_TOKEN_LIST[1]);
    const [toToken, setToToken] = useState<IYourToken>(YOUR_TOKEN_LIST[0]);
    const [isSelectTokenFrom, setIsSelectTokenFrom] = useState(true);
    const [yourTokens, setYourTokens] = useState<IYourToken[]>([]);
    const [tokens, setTokens] = useState<IToken[]>([]);

    //#region Swap setting
    const handleSetting = () => {
        setShowSwapSetting(true);
    }
    const handleChangeSetting = (value: number) => {
        setSkip(value);
        setShowSwapSetting(false);
    }
    const handleCloseSetting = () => {
        setShowSwapSetting(false);
    }
    //#endregion Swap setting

    //#region Select token
    const handleSearchSelectToken = (keyword: string) => {
        setYourTokens(YOUR_TOKEN_LIST.filter(token => {
            return token.symbol !== (isSelectTokenFrom ? toToken.symbol : fromToken.symbol) &&
                (
                    token.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
                    token.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    token.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    token.address.toLowerCase().includes(keyword.toLowerCase())
                )
        }))
    }

    const handleSelectToken = (token: IYourToken) => {
        if (isSelectTokenFrom) {
            setFromToken(token);
        } else {
            setToToken(token)
        }
        setIsSelectTokenFrom(true);
        setShowSelectToken(false);
        setYourTokens([]);
    }

    const handleCloseSelectToken = () => {
        setIsSelectTokenFrom(true);
        setShowSelectToken(false);
        setYourTokens([]);
    }
    const handleAddToken = () => {
        setShowAddToken(true);
    }
    //#endregion Select token

    //#region Add token
    const handleSearchAddToken = (keyword: string) => {
        setTokens(ADD_TOKEN_LIST.filter(token => {
            return YOUR_TOKEN_LIST.findIndex(x => x.symbol !== token.symbol) === -1 &&
                (
                    token.symbol.toLowerCase().includes(keyword.toLowerCase()) ||
                    token.name.toLowerCase().includes(keyword.toLowerCase()) ||
                    token.name.toLowerCase().includes(keyword.toLowerCase())
                )
        }))
    }

    const handleImportToken = (token: IToken) => {
        console.log(token);
        setShowAddToken(false);
        setTokens([]);
    }

    const handleCloseAddToken = () => {
        setShowAddToken(false);
        setTokens([]);
    }
    //#endregion Add token

    //#region Disclaimer
    const handleAcceptDisclaimer = () => {
        setShowDisclaimer(false);
        setShowConfirmSwap(true);
    }

    const handleCloseDisclaimer = () => {
        setShowDisclaimer(false);
    }
    //#endregion Disclaimer

    //#region Swap
    const handleTokenSelect = (isFrom: boolean) => {
        setIsSelectTokenFrom(isFrom);
        setShowSelectToken(true);
    }

    const handleMaxClick = () => {
        handleValueChange(fromToken.balance);
    }

    const handleValueChange = (value: number) => {
        setValueSwap(value);
        setValueReceive(value * exchangeRate);
    }

    const handleImportPriceUpdated = () => {

    }

    const handleSwap = () => {
        setShowDisclaimer(true);
    }

    const handleConfirmSwap = () => {
        setShowConfirmSwap(false);
        setShowSwapSuccess(true);
    }

    const handleCloseConfirmSwap = () => {
        setShowConfirmSwap(false);
    }
    //#endregion Swap

    return <>
        <BeSwapTemplate
            skip={skip}
            fee={APP_FEE}
            fromToken={fromToken}
            valueSwap={valueSwap}
            toToken={toToken}
            valueReceive={valueReceive}
            exchangeRate={exchangeRate}
            onMaxClick={handleMaxClick}
            onValueChange={handleValueChange}
            onTokenSelect={handleTokenSelect}
            onSwap={handleSwap}
            onSetting={handleSetting}
        />
        {/* Swap setting */}
        {
            showSwapSetting ? <BeSwapSettingModal
                title="Swap Settings"
                subSitle="Slippage Tolerance"
                value={skip}
                valueList={SLIPAGE_TOLERANCE_LIST}
                onChange={handleChangeSetting}
                onDissmiss={handleCloseSetting}
            /> : <></>
        }
        {/* Disclaimer */}
        {
            showDisclaimer ? <BeDisclaimerModal
                title="Disclaimer"
                children={<>
                    <p>This website-hosted user interface (this "Interface") is an open source frontend software portal to the Raydium protocol, a decentralized and community-driven collection of blockchain-enabled smart contracts and tools (the "Raydium Protocol"). This Interface and the Raydium Protocol are made available by the Raydium Holding Foundation, however all transactions conducted on the protocol are run by related permissionless smart contracts. As the Interface is open-sourced and the Raydium Protocol and its related smart contracts are accessible by any user, entity or third party, there are a number of third party web and mobile user-interfaces that allow for interaction with the Raydium Protocol. </p>
                    <p>THIS INTERFACE AND THE RAYDIUM PROTOCOL ARE PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. The Raydium Holding Foundation does not provide, own, or control the </p>
                    <p>Raydium Protocol or any transactions conducted on the protocol or via related smart contracts. By using or accessing this Interface or the Raydium Protocol and related smart contracts, you agree</p>
                </>}
                agreeText="I have read, understand and accept these terms."
                closeButtonText="Agree and Continue"
                onAccept={handleAcceptDisclaimer}
                onDissmiss={handleCloseDisclaimer}
            /> : <></>
        }
        {/* Select token */}
        {
            showSelectToken ? <BeSelectTokenModal
                title="Select a token"
                tokens={yourTokens}
                onSearchChange={handleSearchSelectToken}
                onSelect={handleSelectToken}
                onAddToken={handleAddToken}
                onDissmiss={handleCloseSelectToken}
            /> : <></>
        }
        {/* Add token */}
        {
            showAddToken ? <BeAddTokenModal
                title="Add a token"
                onSearchChange={handleSearchAddToken}
                tokens={tokens}
                onImport={handleImportToken}
                onDissmiss={handleCloseAddToken}
            /> : <></>
        }
        {/* Confirm swap */}
        {
            showConfirmSwap ? <BeConfirmSwapModal
                title="Confirm Swap"
                swapInfo={SWAP_INFO}
                confirmButtonText="Confirm Swap"
                onImport={handleImportPriceUpdated}
                onConfirm={handleConfirmSwap}
                onDissmiss={handleCloseConfirmSwap}
            /> : <></>
        }
        {/* Swap success */}
        {
            showSwapSuccess ? <BeSuccessModal
                subTitle="Swap 20 SUI 200 BEAN"
                onDissmiss={() => setShowSwapSuccess(false)}
            /> : <></>
        }
    </>
}
export default BeSwapPage