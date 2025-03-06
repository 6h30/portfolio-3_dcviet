import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        dcviet Portfolio
      </h1>
      <p className="mb-4">
        {`Tôi là một người đam mê Vim và ủng hộ việc sử dụng tab, vì tôi thấy hiệu suất vô song trong các lệnh phím tắt của Vim và sự linh hoạt của tab đối với sở thích hiển thị cá nhân. Điều này cũng mở rộng đến việc tôi ủng hộ kiểu dữ liệu tĩnh, vì khả năng phát hiện lỗi sớm giúp mã sạch hơn, và sở thích của tôi đối với chế độ tối, giúp giảm mỏi mắt trong các phiên lập trình kéo dài.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
