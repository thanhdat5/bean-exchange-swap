import BeIcSearch from "components/atoms/icons/icon-search"
import BeInput from "components/atoms/input"
import BeModal from "components/molecules/modal"
import BeTokenInfo from "components/molecules/token-info"
import { useState } from "react"
import styled from "styled-components"
import { IYourToken } from "types/token.model"

type Props = {
    title: string;
    tokens: IYourToken[];
    onSearchChange: (keyword: string) => void;
    onSelect: (token: IYourToken) => void;
    onAddToken: () => void;
    onDissmiss: () => void;
}
const BeSelectTokenModal = ({
    title,
    tokens,
    onSearchChange,
    onSelect,
    onAddToken,
    onDissmiss
}: Props) => {
    const [keyword, setKeyword] = useState('');

    const handleSearchChange = (value: string) => {
        setKeyword(value);
        onSearchChange(value);
    }

    return <BeModal
        title={title}
        onDissmiss={onDissmiss}
    >
        <StyledSelectToken>
            <BeInput
                placeholder="Search by name or paste address"
                value={keyword}
                iconLeft={<BeIcSearch />}
                onChange={handleSearchChange}
            />
            <StyledTokenList>
                {
                    tokens.map((token, idx) => (
                        <BeTokenInfo
                            key={idx}
                            iconImage={token.logo}
                            name={token.name}
                            symbol={token.symbol}
                            primaryBalance={token.usdBalance}
                            secondaryBalance={token.balance}
                            onClick={() => onSelect(token)}
                        />
                    ))
                }
            </StyledTokenList>
            <StyledAdd type="button" onClick={onAddToken}>Add new token</StyledAdd>
        </StyledSelectToken>
    </BeModal>
}
export default BeSelectTokenModal

const StyledSelectToken = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
`
const StyledTokenList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
`
const StyledAdd = styled.button`
    background-color:transparent;
    padding:0;
    border:0;
    outline:0;
    width:100%;
    margin-top:10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #4E9AFD;
    text-decoration: underline;
    transition:all ease-in-out .3s;
    &:hover{
        opacity:.7;
    }
`