import BeIcSearch from "components/atoms/icons/icon-search"
import BeInput from "components/atoms/input"
import BeModal from "components/molecules/modal"
import BeTokenImport from "components/molecules/token-import"
import { useState } from "react"
import styled from "styled-components"
import { IToken } from "types/token.model"

type Props = {
    title: string;
    tokens: IToken[];
    onSearchChange: (keyword: string) => void;
    onImport: (token: IToken) => void;
    onDissmiss: () => void;
}
const BeAddTokenModal = ({ title, tokens, onSearchChange, onImport, onDissmiss }: Props) => {
    const [keyword, setKeyword] = useState('');

    const handleSearchChange = (value: string) => {
        setKeyword(value);
        onSearchChange(value);
    }
    return <BeModal
        title={title}
        onDissmiss={onDissmiss}
    >
        <StyledAddToken>
            <BeInput
                placeholder="Search by name or paste address"
                value={keyword}
                iconLeft={<BeIcSearch />}
                onChange={handleSearchChange}
            />
            <StyledTokenList>
                {
                    tokens.map((token, idx) => (
                        <BeTokenImport
                            key={idx}
                            onImport={() => onImport(token)}
                            iconImage={token.logo}
                            name={token.name}
                            symbol={token.symbol}
                        />
                    ))
                }
            </StyledTokenList>
        </StyledAddToken>
    </BeModal>
}
export default BeAddTokenModal

const StyledAddToken = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    align-items: flex-start;
`
const StyledTokenList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
`