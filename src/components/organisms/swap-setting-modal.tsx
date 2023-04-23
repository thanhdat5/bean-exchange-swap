import BeInput from "components/atoms/input"
import BeInputButton from "components/atoms/input-button"
import BeModal from "components/molecules/modal"
import { useEffect, useState } from "react"
import { Col, Row } from 'react-bootstrap'
import styled from "styled-components"
import { ISkip } from "types/swap.model"

type Props = {
    title: string;
    subSitle?: string;
    value: number;
    valueList: ISkip[],
    onChange: (value: number) => void;
    onDissmiss?: () => void;
}
const BeSwapSettingModal = ({
    title,
    subSitle,
    value,
    valueList = [],
    onDissmiss,
    onChange
}: Props) => {
    const [customValue, setCustomValue] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (valueList.findIndex(x => x.value === value) !== -1) {
            setCustomValue(undefined);
        }else{
            setCustomValue(value)
        }
    }, [value, valueList])

    return <BeModal
        onDissmiss={onDissmiss}
        title={title}
    >
        <StyledSwapSetting>
            {subSitle ? <StyledDescription>{subSitle}</StyledDescription> : <></>}
            <StyledOptions>
                <Row>
                    {
                        valueList.map((item, idx) => (
                            <Col key={idx}>
                                <BeInputButton
                                    selected={value === item.value && !customValue}
                                    onClick={onChange}
                                    value={item.value}
                                    label={item.label}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </StyledOptions>
            <BeInput
                type="number"
                width="100%"
                placeholder="Custom"
                value={customValue}
                iconRight={<>%</>}
                onChange={e => setCustomValue(e ? Number(e) : undefined)}
                onBlur={e => e ? onChange(Number(e)) : null}
            />
        </StyledSwapSetting>
    </BeModal>
}
export default BeSwapSettingModal
const StyledSwapSetting = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const StyledDescription = styled.div`
    width:100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    margin-top: -7px;
    margin-bottom: 17px;
`
const StyledOptions = styled.div`
    width: 100%;
    margin-bottom: 17px;
    .row{
        --bs-gutter-x: 16px;
    }
`