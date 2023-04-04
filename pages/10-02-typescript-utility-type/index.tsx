


const TypescriptUtilityPage = () => {
    interface IProfile {
        name: string
        age: number
        school: string
        hobby?: string
    }

    // 1. pick 타입 - 고르다.
    type aaa = Pick<IProfile, "name" | "age">;

    // 2. omit 타입 - 제외하다.
    type bbb = Omit<IProfile, "school">;

    // 3. partial 타입 - 있어도 되고, 없어도 되고! 모든 타입에 ?를 붙여준다.
    type ccc = Partial<IProfile>;

    // 4. required 타입 - 필요하다. 전부 필수로 바꿔준다.
    type ddd= Required<IProfile>;

    // 5. record 타입
    type eee = "철수" | "영희" | "훈이"; // type이 string이면서도 철수, 영희, 훈이만 들어갈 수 있는 Union 타입
    let child: eee;
    child = "철수";

    type fff = Record<eee, IProfile>; // union 타입을 하나 하나 나누어, 각각 IProfile 타입을 적용시켜준다.

    // ===== (type vs interface) 차이 : 선언 병합 =====
    interface IProfile {
        candy: number
    }
    // 최상단의 IProfile과 바로 위 IProfile이 합쳐진다.

    let profile: Partial<IProfile> = {};
    profile.candy = 10;
};


export default TypescriptUtilityPage;