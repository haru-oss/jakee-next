import styled from "styled-components"

export const UserCrad = () => {
    return(
<div>

    <img height ={160} width={160} src = "https://source.unsplash.com/Tk9Kz4wGZ1I" alt="プロフィール" />
    <p>名前</p>
    <SDl>
        <dt>メール</dt>
        <dd>haruru@gmail.com</dd>

        <dt>TEL</dt>
        <dd>088047477773</dd>
        <dt>会社名</dt>
        <dd>o-kuranddddファクトリー</dd>
        <dt>WEB</dt>
        <dd>httpfgjgjgfkgj</dd>
    </SDl>
</div>
    )
};


const SDl = styled.dl`
text-align: left;
margin-bottom: 0px;
dt {
    float:left
}

dd{
    padding-left:  32px;
    padding-bottom: 8px
}


`