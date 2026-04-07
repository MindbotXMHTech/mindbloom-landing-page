import { images } from "./images";
import type { LocalizedText } from "../i18n/types";

type BlogDetail = {
  id: string;
  title: LocalizedText;
  image: string;
  content: LocalizedText[];
  youtubeId?: string;
  date?: LocalizedText;
};

export const BlogList: BlogDetail[] = [
  {
    id: "1",
    title: { th: "อยู่กับ (คน) ซึมเศร้า", en: "Living with Someone with Depression" },
    image: images.blog1,
    content: [
      {
        th: 'เป็นห่วงคนที่มีภาวะซึมเศร้า หรือเป็นโรคซึมเศร้า เราทำอะไรได้บ้าง? \n เป็นธรรมดาที่เมื่อเรารู้ว่าคนที่เราห่วงใยกำลังเผชิญกับเรื่องไม่สบายใจ จนอาจกลายเป็นภาวะ หรือโรคซึมเศร้า เรามักจะอยากแสดงความเป็นห่วงหรือความช่วยเหลือ \n แต่บางครั้ง การ "พยายาม" ช่วย อาจเป็นการทำร้ายคนที่เผชิญอาการทางใจนี้อยู่ \n ไม่ได้หมายความว่าความเป็นห่วงของเราไม่มีค่า หรือไม่มีความหมาย แต่เป็นเพราะภาวะอารมณ์ที่จมดิ่งต่างหาก ที่ทำให้คนที่กำลังอยู่ในหลุมดำรู้สึกอ่อนไหวและเปราะบาง แม้กระทั่งกับความรักและห่วงใยของคนใกล้ตัว \n #สิ่งที่คนซึมเศร้ารู้สึก \n เราไม่มีค่า \n เราทำให้คนอื่นเดือดร้อน \n เราคือตัวปัญหา \n เราไม่ดี \n --> นี่คือความคิดโทษตัวเองและรู้สึกผิด หมายความว่ายิ่งมีคนพยายามยื่นมือเข้ามาเท่าไหร่ อาจยิ่งทำให้จมกับการโทษตัวเองหรือรู้สึกผิดมากขึ้นเท่านั้น \n คนซึมเศร้า เปราะบางและอ่อนไหวง่ายกว่าปกติ บางครั้งอ่อนแอเกินกว่าที่จะเข้าไปสัมผัสความรู้สึก หรือไปดูความคิดที่รบกวนจิตใจอยู่ แม้การระบายให้คนใกล้ตัวฟังจะเป็นการจัดการอารมณ์หม่นๆ ที่ดี แต่สำหรับบางช่วงเวลาของบางคนมันก็เจ็บปวดเกินไปที่จะเข้าไปคุ้ยแล้วพูดออกมา \n การถามไถ่แบบมุ่งหวังคำตอบ อาจเป็นเหมือนมีดที่กรีดลงไปบนแผลใจนั้น \n หรือแม้แต่การอยู่ข้างๆ ตลอดเวลา อาจทำให้คนซึมเศร้ารู้สึกอึดอัด เพราะไม่มีพื้นที่ที่จะแสดงความรู้สึกแบบไม่ถูกจับจ้อง \n แล้วเราควรจะอยู่กับคนซึมเศร้า หรือดูแลเค้าแบบไหน? \n  \u00A0 การทำตัวเหมือนปกติ \u00A0 น่าจะเป็นคำตอบที่ปลอดภัยที่สุดที่จะตอบ \n อยู่กับคนซึมเศร้า ให้กำลังใจแต่ไม่ผลักดัน \n อยู่ข้างๆ ได้ แต่ไม่คุกคาม \n ถามไถ่ แต่ไม่คาดคั้น \n แคร์ แต่ไม่คิดแทน \n ทำตัวให้เป็นปกติในเวอร์ชั่นที่อ่อนโยนขึ้นหน่อย \n พูดคุยเรื่องทั่วไปบ้าง ไม่ต้องมุ่งเน้นคุยแต่ประเด็นที่เค้าไม่สบายใจ \n คอยสังเกตขึ้นอีกนิด แบบไม่จดจ้อง อาจจะดูว่าภาษากายของเค้าบอกว่าเค้าคุยไหวอยู่มั้ย \n เปิดใจถาม ว่าอยากให้เราทำตัวยังไง \n คำตอบที่ได้ อาจจะเป็นการอยากให้เราอยู่เฉยๆ เหมือนปกติ \n หรืออยากให้อยู่ใกล้ๆ มากกว่าเดิมก็ได้ \n คนซึมเศร้าแต่ละคนอาจจะต้องการไม่เหมือนกัน ลองสังเกตหรือเปิดใจดูเท่าที่เค้าไหว \n เคล็ดลับที่นักจิตวิทยาใช้เวลาคุยกับผู้ป่วยซึมเศร้าก็คือ ไม่คุกคาม ไม่คาดคั้น ไม่ตีความ ไม่ตัดสิน คุยเมื่อไหว และอยู่ตรงนั้นเสมอ ด้วยความจริงใจและความใส่ใจนะ 🙂',
        en: 'What can we do for someone we care about who is experiencing depression? It is natural to want to help when we know someone we love is struggling. But sometimes, trying too hard to help can unintentionally hurt the person who is already carrying emotional pain.\n\nThis does not mean your care has no value. Rather, depression can make someone feel especially fragile, even in the presence of love and concern.\n\nPeople with depression may feel worthless, burdensome, or like they are the problem. These self-blaming thoughts can make support feel difficult to receive.\n\nSometimes they may be too overwhelmed to talk about what is going on inside. Even well-meaning questions can feel like pressure, and constant closeness may feel suffocating when they need space.\n\nSo what helps? Often, the safest answer is to stay present in a gentle and ordinary way: offer encouragement without pushing, stay nearby without intruding, ask without demanding, care without deciding for them, and talk about everyday things too.\n\nObserve quietly. Ask openly what they need from you. Each person may need something different, and that can change over time.\n\nA core principle many psychologists use when supporting people with depression is this: do not pressure, do not force meaning, do not judge. Be there when they are ready, with sincerity and care.',
      },
    ],
    date: { th: "12 กุมภาพันธ์ 2568", en: "February 12, 2025" },
  },
  {
    id: "2",
    title: { th: "MindBloom Podcast - Ep. 01", en: "MindBloom Podcast - Ep. 01" },
    image: images.blog2,
    content: [
      {
        th: "กลับมาอีกครั้งกับ MindBloom Podcast \n พอดแคสต์ที่จะชวนเพื่อน ๆ มาฟังความคิดเห็นและมุมมองของทีมมายด์บลูม \n ในบรรยากาศสบาย ๆ สไตล์เพื่อนคุย \n กันพร้อมสอดแทรกจิตวิทยาเล็ก ๆ น้อย ๆ ให้เข้าใจใจตัวเองมากขึ้น \n\n แต่ขอสัญญาเลยว่าเราจะกลับมาให้บ่อยขึ้นค่ะ \n\n สำหรับ EP นี้ \n Year Wrapped: ดอกไม้ใดที่บานในใจปีนี้ \n เราจะพาทุกคนไปทบทวนเรื่องราวที่เกิดขึ้นในปี 2025 \n ร่วมกับสมาชิกมายด์บลูมทั้งหน้าเก่าและหน้าใหม่ \n แต่ละคนเติบโตหรือเรียนรู้อะไรกันไปบ้าง \n\n ชวนทุกคนมา Wrapped ไปพร้อม ๆ กับพวกเรา \n ลองฟังดูว่า มีเรื่องไหนที่คล้ายกับของคุณบ้างไหม",
        en: "MindBloom Podcast is back. This is a space where we invite you to listen to the thoughts and perspectives of the MindBloom team in a relaxed, friendly atmosphere, with a touch of psychology to help you understand yourself a little more.\n\nAnd we promise to return more often.\n\nIn this episode, Year Wrapped: What flowers bloomed in your heart this year, we look back on the stories of 2025 together with both long-time and new MindBloom members, reflecting on how each person has grown and what they have learned.\n\nCome do your own Wrapped with us and see whether any part of the story feels like yours too.",
      },
    ],
    youtubeId: "https://youtu.be/MnJSYI2fyAs?si=aUR82gUDNNFfafBp",
    date: { th: "12 กุมภาพันธ์ 2568", en: "February 12, 2025" },
  },
  {
    id: "3",
    title: { th: "การทำงานแบบใหม่ในร้านกาแฟ", en: "A New Way of Working from Cafes" },
    image: images.blog3,
    content: [
      {
        th: "Work from Cafe เป็นหนึ่งในรูปแบบการทำงานยุคใหม่ \n ที่เปิดโอกาสให้พนักงานทำงานจากสถานที่ที่เหมาะสมกับตนเองมากขึ้น โดยเฉพาะ \u00A0 ร้านคาเฟ่ \u00A0 \n ที่มักมีบรรยากาศสบาย ๆ พร้อมเครื่องดื่มช่วยเติมพลัง ทำให้การทำงานยืดหยุ่น \n และสร้างประสิทธิภาพได้มากกว่าที่เคย \n\n จากการวิจัยของคุณ Maspul \n โดยการสัมภาษณ์ผู้ทำงานในร้านคาเฟ่ พบว่าปัจจัยหลักที่ส่งผลต่อการตัดสินใจเลือกคาเฟ่ในการทำงาน ได้แก่: \n\n 1. ความแออัดในร้าน (Overcrowding) \n ร้านคาเฟ่ยอดนิยมอาจมีคนหนาแน่นจนบรรยากาศรู้สึกอึดอัดและไม่สบาย ส่งผลให้สมาธิและประสิทธิภาพลดลง \n การเลือกคาเฟ่ที่คนรู้จักน้อยแต่มีบรรยากาศอบอุ่นก็เป็นอีกทางเลือกได้เหมือนกัน \n\n 2. ระดับเสียง (Noise Level) \n เสียงพูดคุย เสียงเพลง หรือเสียงเครื่องปั่นในร้าน อาจรบกวนสมาธิได้ หากคุณต้องการความเงียบเพื่อโฟกัส \n ลองหาคาเฟ่ที่มีพื้นที่เงียบสงบหรือนั่งในโซนส่วนตัว",
        en: "Working from cafes has become one of the newer ways people approach work. It gives employees more flexibility to choose spaces that suit them, especially cafes with a comfortable atmosphere and energizing drinks.\n\nResearch by Maspul, based on interviews with people who work from cafes, found that key factors influencing cafe choice include:\n\n1. Overcrowding. Popular cafes can become so busy that the atmosphere feels cramped and uncomfortable, reducing focus and productivity. Sometimes a lesser-known cafe with a warm atmosphere may work better.\n\n2. Noise level. Conversations, music, or blender sounds can interrupt concentration. If you need a quieter place to focus, it may help to choose a cafe with a calm area or a more private corner.",
      },
    ],
    date: { th: "12 กุมภาพันธ์ 2568", en: "February 12, 2025" },
  },
];
