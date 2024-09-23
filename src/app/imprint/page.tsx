import Footer from "@/components/Footer"
import Navbar from "@/components/navigation/Navbar"

const ImprintPage = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-24 mx-auto mb-36 px-12 py-4 space-y-4">
        <h1 className="text-4xl font-bold font-serif">Imprint</h1>
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p>[Name]</p>
        <p>[Address]</p>
        <p>[Email]</p>
        <p>[Phone]</p>
        <h2 className="text-xl font-bold">MIT License</h2>
        <p>Copyright (c) 2024 David Luthiger</p>
        <h2 className="text-xl font-bold"></h2>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          &quot;Software&quot;), to deal in the Software without restriction,
          including without limitation the rights to use, copy, modify, merge,
          publish, distribute, sublicense, and/or sell copies of the Software,
          and to permit persons to whom the Software is furnished to do so,
          subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY
          KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
          OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </section>
      <Footer />
    </>
  )
}

export default ImprintPage
