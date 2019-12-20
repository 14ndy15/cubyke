<?php

namespace App\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\BasicPage;
use App\Entity\Bike;
use App\Entity\BlogEntry;
use App\Entity\TeamMember;
use App\Entity\Tour;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class FrontendController extends AbstractController
{
    use GeoIp;

    /**
     * @Route("/{_locale}",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="index")
     */
    public function index()
    {
        $tours = $this->getDoctrine()
            ->getRepository(Tour::class)
            ->getByOrder();

        $teamMembers = $this->getDoctrine()
            ->getRepository(TeamMember::class)
            ->getByOrder();

        $bikes = $this->getDoctrine()
            ->getRepository(Bike::class)
            ->findAll();

        $blog_entries = $this->getDoctrine()
            ->getRepository(BlogEntry::class)
            ->findMostRecent(3);

        return $this->render('frontend/index.html.twig', [
            'tours' => $tours,
            'teamMembers' => $teamMembers,
            'bikes' => $bikes,
            'blog_entries' => $blog_entries,
        ]);
    }

    /**
     * @Route("/{_locale}/tours",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="tours")
     */
    public function tours()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('tours');

        return $this->render('frontend/tours.html.twig', [
            'page' => $page,
        ]);
    }

    /**
     * @Route("/{_locale}/bikes",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="bikes")
     */
    public function bikes()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('bikes');

        $bikes = $this->getDoctrine()
            ->getRepository(Bike::class)
            ->findAll();

        return $this->render('frontend/bikes.html.twig', [
            'page' => $page,
            'bikes' => $bikes,
        ]);
    }

    /**
     * @Route("/{_locale}/blog",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="blog")
     */
    public function blog()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('blog');

        $blog_entries = $this->getDoctrine()
            ->getRepository(BlogEntry::class)
            ->findMostRecent(5);

        return $this->render('frontend/blog.html.twig', [
            'page' => $page,
            'blog_entries'=>$blog_entries,
        ]);
    }

    /**
     * @Route("/{_locale}/blog/{_id}/{_name}",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de",
     *     "_id":"\d+"},
     *     name="blog_entry")
     * @Route("/blog/{_id}/{_name}", name="blog_entry_alternative")
     */
    public function blog_entry($_id, $_name)
    {

        $blog_entry = $this->getDoctrine()
            ->getRepository(BlogEntry::class)
            ->find($_id);

        return $this->render('frontend/blog_entry.html.twig', [
            'blog_entry' => $blog_entry,
            'id'=>$_id,
            'name'=>$_name,
        ]);
    }

    /**
     * @Route("/{_locale}/buy",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="buy")
     */
    public function buy()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('buy');

        return $this->render('frontend/buy.html.twig', [
            'page' => $page,
        ]);
    }

    /**
     * @Route("/{_locale}/team",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="team")
     */
    public function team()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('team');

        $teamMembers = $this->getDoctrine()
            ->getRepository(TeamMember::class)
            ->getByOrder();

        return $this->render('frontend/team.html.twig', [
            'page' => $page,
            'teamMembers' => $teamMembers,
        ]);
    }




    /**
     * @Route("/{_locale}/company-information",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="company_information")
     */
    public function company_information()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('company_information');

        return $this->render('frontend/basic_page.html.twig', [
            'page' => $page,
        ]);
    }

    /**
     * @Route("/{_locale}/privacy-policy",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="privacy_policy")
     */
    public function privacy_policy()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('privacy_policy');

        return $this->render('frontend/basic_page.html.twig', [
            'page' => $page,
        ]);
    }

    /**
     * @Route("/{_locale}/patent",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="patent")
     */
    public function patent()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('patent');

        return $this->render('frontend/basic_page.html.twig', [
            'page' => $page,
        ]);
    }

    /**
     * @Route("/{_locale}/travel-conditions",
     *     defaults={"_locale": "en"},
     *     requirements={"_locale": "en|es|de"},
     *     name="travel_conditions")
     */
    public function travel_conditions()
    {
        $page = $this->getDoctrine()
            ->getRepository(BasicPage::class)
            ->findByCodeName('travel_conditions');

        return $this->render('frontend/basic_page.html.twig', [
            'page' => $page,
        ]);
    }

    public function usCitizenText()
    {
        $isUs =  $this->isUS();
        $existCookie =  !isset($_COOKIE['readUSCitizenInfo']);
        return $this->render('frontend/global/_textUSCitizen.html.twig', [
            'show' => $isUs && $existCookie,
        ]);
    }

    /**
     * @Route("/mail", name="mail")
     */
    public function mailContact(Request $request){

        $name = $request->get('name');
        $email = $request->get('email');
        $message = $request->get('message');

        $response = ['response'=>'error'];

        if (filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            mail('info@cubyke.com',
                'Nuevo mensaje de contacto',
                'Escribio: '.$name.'<br>'.
                        'con correo: '.$email.'<br>'.
                        'el mensaje: '.$message);

            $response = ['response'=>'success'];
        }

        return $this->json($response);
    }

}
