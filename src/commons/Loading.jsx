import React from 'react'
import styled from 'styled-components';
export function Loading() {
    return (
        <Container>
            <div class="cssload-loader-inner">
		<div class="cssload-cssload-loader-line-wrap-wrap">
			<div class="cssload-loader-line-wrap"></div>
		</div>
		<div class="cssload-cssload-loader-line-wrap-wrap">
			<div class="cssload-loader-line-wrap"></div>
		</div>
		<div class="cssload-cssload-loader-line-wrap-wrap">
			<div class="cssload-loader-line-wrap"></div>
		</div>
		<div class="cssload-cssload-loader-line-wrap-wrap">
			<div class="cssload-loader-line-wrap"></div>
		</div>
		<div class="cssload-cssload-loader-line-wrap-wrap">
			<div class="cssload-loader-line-wrap"></div>
		</div>
	</div>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px
`