import { useState } from 'react';
import { Title } from '../../../components/common/Title';
import { CenterSection } from '../../../styles/style';
import Categorys from '../../../components/create/Categorys';
import Tags from '../../../components/create/Tags';
import Price from '../../../components/create/Price';
import LiTitle from '../../../components/create/LiTitle';
import Location from '../../../components/create/Location';
import { Button } from '../../../components/common/Button';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { setSubDataObject } from '../../../atoms/sub/atom';
import { Input, Li, NumberInput, TextArea, Ul } from '../create';

const Update = () => {
   const router = useRouter();
   const { query } = useRouter();
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const postData = useRecoilValue(setSubDataObject);

   const [category, setCategory] = useState(postData.category);
   const [title, setTitle] = useState(postData.title);
   const [content, setContent] = useState(postData.content);
   const [tags, setTags] = useState<string[]>(postData.tags);
   const [personnel, setPersonnel] = useState<number | string>(postData.personnel);
   const [price, setPrice] = useState<number | string>(postData.price);
   const datePolicy = postData.dateTime.datePolicy;

   const [si, setSi] = useState('');
   const [gu, setGu] = useState<number[]>(postData.addressIds);
   const [addressPreview, setAddressPreview] = useState<string[]>(postData.address.addresses);
   const [addressInfo, setAddressInfo] = useState(postData.address.addressInfo);

   const [categoryError, setCategoryError] = useState('');
   const [titleError, setTitleError] = useState('');
   const [contentError, setContentError] = useState('');
   const [tagError, setTagError] = useState('');
   const [addressIdsError, setAddressIdsError] = useState('');
   const [personnelError, setPersonnelError] = useState('');
   const [priceError, setPriceError] = useState('');

   const handleClickTag = (value: string) => {
      if (tags.includes(value)) {
         setTags([...tags.filter(tag => tag !== value)]);
      } else {
         setTags([...tags, value]);
      }
   };

   const handleClickSi = (value: string) => {
      setSi(value);
   };

   const handleClickGu = (id: number, name: string) => {
      if (gu.includes(id)) {
         setGu([...gu.filter(el => el !== id)]);
         setAddressPreview([...addressPreview.filter(el => el !== `${si} ${name}`)]);
      } else {
         if (gu.length >= 3) {
            alert('최대 3개까지 선택이 가능 합니다.');
            return;
         }

         setGu([...gu, id]);
         setAddressPreview([...addressPreview, `${si} ${name}`]);
      }
   };

   const inputData = {
      category,
      title,
      content,
      tags,
      address: { addressIds: gu, addressInfo },
      personnel: datePolicy === 'FREE' ? 1 : Number(personnel),
      price: Number(price)
   };

   const checkError = () => {
      setCategoryError('');
      setTitleError('');
      setContentError('');
      setTagError('');
      setAddressIdsError('');
      setPersonnelError('');
      setPriceError('');

      if (category === '') {
         setCategoryError('카테고리를 선택해주세요.');
         return true;
      } else if (title === '') {
         setTitleError('제목을 입력해주세요.');
         return true;
      } else if (content === '') {
         setContentError('내용을 입력해주세요.');
         return true;
      } else if (tags.length < 1) {
         setTagError('1개 이상 선택해주세요.');
         return true;
      } else if (gu.length < 1) {
         setAddressIdsError('1개 이상 선택해주세요.');
         return true;
      } else if (personnel < 1) {
         setPersonnelError('1명 이상 입력해주세요.');
         return true;
      } else if (price < 0) {
         setPriceError('0원 이상 입력해주세요.');
         return true;
      }

      return;
   };

   const handleSubmit = () => {
      if (checkError()) {
         window.scrollTo(0, 0);
         return;
      }

      axios
         .patch(`${API_URI}/meetings/${query.id}`, inputData)
         .then(() => {
            router.push(`/sub/${query.id}`);
         })
         .catch(err => console.log('에러', err));
   };

   return (
      <div>
         <CenterSection>
            <Title label="모임 수정하기" marginBottom="20px" />
            <Ul>
               <Li>
                  <LiTitle main="카테고리" sub="카테고리를 선택해주세요." error={categoryError} preview={category} />
                  <Categorys category={category} setCategory={setCategory} />
               </Li>
               <Li>
                  <LiTitle main="제목" error={titleError} />
                  <Input
                     placeholder="모임 제목을 입력해주세요."
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                  />
               </Li>
               <Li>
                  <LiTitle main="내용" error={contentError} />
                  <TextArea
                     placeholder="모임 내용을 입력해주세요."
                     value={content}
                     onChange={e => setContent(e.target.value)}
                  />
               </Li>
               <Li>
                  <LiTitle main="태그" sub="1개 이상 선택해주세요." error={tagError} />
                  <Tags tags={tags} handleClickTag={handleClickTag} />
               </Li>
               <Li>
                  <LiTitle
                     main="위치"
                     sub="최대 3개까지 선택이 가능 합니다."
                     error={addressIdsError}
                     preview={addressPreview.join(` , `)}
                  />
                  <Location si={si} gu={gu} handleClickSi={handleClickSi} handleClickGu={handleClickGu} />
               </Li>
               <Li>
                  <LiTitle main="추가 주소 입력" sub="개인 정보 보호를 위해 정확한 주소를 입력하지 마세요." />
                  <Input
                     placeholder="예시) 스타벅스 근처 협의"
                     value={addressInfo}
                     onChange={e => setAddressInfo(e.target.value)}
                  />
               </Li>
               <Li>
                  <LiTitle main="인원수" error={personnelError} />
                  <NumberInput
                     type="number"
                     min={1}
                     value={personnel}
                     disabled={datePolicy === 'FREE' && true}
                     onChange={e => {
                        setPersonnel(e.target.value);
                     }}
                  />
               </Li>
               <Li>
                  <LiTitle main="가격 설정" error={priceError} />
                  <Price datePolicy={datePolicy} price={price} setPrice={setPrice} />
               </Li>
               <Button size="bigBold" label="작성 완료" onClick={handleSubmit} />
            </Ul>
         </CenterSection>
      </div>
   );
};

export default Update;
