import styles from '../../styles/emotion.module.css';


const OtherLoginPage = () => {

    return (
        <div className={styles.inner}>
            <h2 className={styles.title}>로그인</h2>
            <div className={styles.row}>
                <label className={styles.label} htmlFor="id">아이디</label>
                <input className={styles.input} id="id" type="text" />
            </div>
            <div className={styles.row}>
                <label className={styles.label} htmlFor="id">비밀번호</label>
                <input className={styles.input} id="password" type="password" />
            </div>
        </div>
    );

};

export default OtherLoginPage;