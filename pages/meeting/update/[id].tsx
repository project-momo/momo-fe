import { useState } from 'react';
import { Title } from '../../../components/common/Title';
import { CenterSection } from '../../../styles/style';
import Categorys from '../../../components/create/Categorys';
import Tags from '../../../components/create/Tags';
import Price from '../../../components/create/Price';
import LiTitle from '../../../components/create/LiTitle';
import Location from '../../../components/create/Location';
import { Button } from '../../../components/common/Button';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { setSubDataObject } from '../../../atoms/sub/atom';
import { Input, Li, NumberInput, TextArea, Ul } from '../create';
import { api } from '../../../util/token';

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
            alert('?????? 3????????? ????????? ?????? ?????????.');
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
         setCategoryError('??????????????? ??????????????????.');
         return true;
      } else if (title === '') {
         setTitleError('????????? ??????????????????.');
         return true;
      } else if (content === '') {
         setContentError('????????? ??????????????????.');
         return true;
      } else if (tags.length < 1) {
         setTagError('1??? ?????? ??????????????????.');
         return true;
      } else if (gu.length < 1) {
         setAddressIdsError('1??? ?????? ??????????????????.');
         return true;
      } else if (personnel < 1) {
         setPersonnelError('1??? ?????? ??????????????????.');
         return true;
      } else if (price < 0) {
         setPriceError('0??? ?????? ??????????????????.');
         return true;
      }

      return;
   };

   const handleSubmit = () => {
      if (checkError()) {
         window.scrollTo(0, 0);
         return;
      }

      api.patch(`${API_URI}/meetings/${query.id}`, inputData)
         .then(() => {
            router.push(`/sub/${query.id}`);
         })
         .catch(err => console.log('??????', err));
   };

   return (
      <div>
         <CenterSection>
            <Title label="?????? ????????????" marginBottom="20px" />
            <Ul>
               {/* <Li>
                  <LiTitle main="????????????" sub="??????????????? ??????????????????." error={categoryError} preview={category} />
                  <Categorys category={category} setCategory={setCategory} />
               </Li> */}
               <Li>
                  <LiTitle main="??????" error={titleError} />
                  <Input
                     placeholder="?????? ????????? ??????????????????."
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                  />
               </Li>
               <Li>
                  <LiTitle main="??????" error={contentError} />
                  <TextArea
                     placeholder="?????? ????????? ??????????????????."
                     value={content}
                     onChange={e => setContent(e.target.value)}
                  />
               </Li>
               <Li>
                  <LiTitle main="??????" sub="1??? ?????? ??????????????????." error={tagError} />
                  <Tags tags={tags} handleClickTag={handleClickTag} />
               </Li>
               {/* <Li>
                  <LiTitle
                     main="??????"
                     sub="?????? 3????????? ????????? ?????? ?????????."
                     error={addressIdsError}
                     preview={addressPreview.join(` , `)}
                  />
                  <Location si={si} gu={gu} handleClickSi={handleClickSi} handleClickGu={handleClickGu} />
               </Li>
               <Li>
                  <LiTitle main="?????? ?????? ??????" sub="?????? ?????? ????????? ?????? ????????? ????????? ???????????? ?????????." />
                  <Input
                     placeholder="??????) ???????????? ?????? ??????"
                     value={addressInfo}
                     onChange={e => setAddressInfo(e.target.value)}
                  />
               </Li> */}
               <Li>
                  <LiTitle main="?????????" error={personnelError} />
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
               {/* <Li>
                  <LiTitle main="?????? ??????" error={priceError} />
                  <Price datePolicy={datePolicy} price={price} setPrice={setPrice} />
               </Li> */}
               <Button size="bigBold" label="?????? ??????" onClick={handleSubmit} />
            </Ul>
         </CenterSection>
      </div>
   );
};

export default Update;
